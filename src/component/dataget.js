import React from "react";
import { useState } from "react";
import Card from "./card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dataget = () => {
  let price = 0;
  const [CurrentProduct, setProduct] = useState("");
  let [CurrentPrice, setPrice] = useState("");
  const [Currentquantity, setquantity] = useState("");
  let [Currenttotal, settotal] = useState("");
  const [newData, setData] = useState([]);

  const [Display, setDisplay] = useState(false);
  const [Select, setSelect] = useState("");
  const MobileProduct = ["Mobile Product", "redme", "oppo", "poco"];
  const DressProduct = ["Dress Product", "chudi", "kurti", "saree"];
  const HomeAppliances = ["Home Appliances", "Tv", "Ac", "refrigerator"];
  let type = null;
  let Options = null;
  if (Select === "Mobile") type = MobileProduct;
  else if (Select === "Dress") type = DressProduct;
  else if (Select === "HomeAppliance") type = HomeAppliances;

  if (type) Options = type.map((el) => <option>{el}</option>);
  const [MobileData, setMobile] = useState([]);
  const [DressData, setDress] = useState([]);
  const [AppliancesData, setAppliances] = useState([]);

  const displayData = (e) => {
    e.preventDefault();
    if (CurrentProduct !== "" && Currentquantity !== "") {
      const Data = {
        CurrentProduct,
        CurrentPrice,
        Currentquantity,
        Currenttotal,
      };
      setData([...newData, Data]);
      console.log(Data);
      setProduct("");
      setPrice("");
      setquantity("");
      settotal("");
    }
  };

  const deleterow = (e) => {
    e.target.parentNode.parentNode.parentNode.deleteRow(0);
  };
  const display = () => {
    setDisplay(true);
    setSelect("Mobile");
    setData([]);
  };
  const displaydress = () => {
    setDisplay(true);
    setSelect("Dress");
    setData([]);
  };

  const displayElectronics = () => {
    setDisplay(true);
    setSelect("HomeAppliance");
    setData([]);
  };

  const Price = (Products) => {
    if (Products === "poco") price = 10000;
    else if (Products === "oppo") price = 12000;
    else if (Products === "redme") price = 8500;
    else if (Products === "chudi") price = 500;
    else if (Products === "saree") price = 1000;
    else if (Products === "kurti") price = 600;
    else if (Products === "Tv") price = 50000;
    else if (Products === "Ac") price = 55000;
    else if (Products === "refrigerator") price = 30000;
    return price;
  };
  const Multiple = (price, quantity) => {
    let mul = price * quantity;

    return mul;
  };

  const Order = () => {
    toast("Your Order Placed!");
    localStorage.details = JSON.stringify(newData);

    let newDatas = JSON.parse(localStorage.details);

    setData([]);

    newDatas.map((values, index) => {
      if (
        values.CurrentProduct === "oppo" ||
        values.CurrentProduct === "poco" ||
        values.CurrentProduct === "redme"
      ) {
        const Mobile = {
          Mobile: values.CurrentProduct,
          Mobileprice: values.CurrentPrice,
          Mobilequantity: values.Currentquantity,
          Mobiletotal: values.Currenttotal,
        };
        setMobile((MobileData) => [...MobileData, Mobile]);
        console.log(MobileData);
        localStorage.Mobile = JSON.stringify(MobileData);
      } else if (
        values.CurrentProduct === "chudi" ||
        values.CurrentProduct === "saree" ||
        values.CurrentProduct === "kurti"
      ) {
        const Dress = {
          Dress: values.CurrentProduct,
          Dressprice: values.CurrentPrice,
          Dressquantity: values.Currentquantity,
          Dresstotal: values.Currenttotal,
        };
        setDress((DressData) => [...DressData, Dress]);
      } else if (
        values.CurrentProduct === "Tv" ||
        values.CurrentProduct === "Ac" ||
        values.CurrentProduct === "refrigerator"
      ) {
        const Appliance = {
          Appliance: values.CurrentProduct,
          Applianceprice: values.CurrentPrice,
          Appliancequantity: values.Currentquantity,
          Appliancetotal: values.Currenttotal,
        };
        setAppliances((AppliancesData) => [...AppliancesData, Appliance]);
      }
      return null;
    });
  };
  return (
    <>
      <div>
        <table className="supplier">
          <tbody>
            <tr>
              <th>
                <button onClick={display}>MOBILES</button>
              </th>
              <th>
                <button onClick={displaydress}>DRESS</button>
              </th>
              <th>
                <button onClick={displayElectronics}>Home Appliance</button>
              </th>
            </tr>
            <tr>
              <td>
                <div className="displayContainer">
                  <h3>NAME : Redme</h3>
                  <h3>PRICE : 15000</h3>
                  <h3>QUANTITY : 2</h3>
                  <h3>AMOUNT : 30000</h3>
                </div>
              </td>

              <td>
                <div className="displayContainer">
                  <h3>NAME: Saree</h3>
                  <h3>PRICE : 5000</h3>
                  <h3>QUANTITY : 2</h3>
                  <h3>AMOUNT : 10000</h3>
                </div>
              </td>
              <td>
                <div className="displayContainer">
                  <h3>NAME : Tv</h3>
                  <h3>PRICE : 45000</h3>
                  <h3>QUANTITY : 2</h3>
                  <h3>AMOUNT : 90000</h3>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {MobileData.map((data) => {
                  return (
                    <Card
                      Product={data.Mobile}
                      Price={data.Mobileprice}
                      Quantity={data.Mobilequantity}
                      Total={data.Mobiletotal}
                    ></Card>
                  );
                })}
              </td>
              <td>
                {DressData.map((data) => {
                  return (
                    <Card
                      Product={data.Dress}
                      Price={data.Dressprice}
                      Quantity={data.Dressquantity}
                      Total={data.Dresstotal}
                    ></Card>
                  );
                })}
              </td>
              <td>
                {AppliancesData.map((data) => {
                  return (
                    <Card
                      Product={data.Appliance}
                      Price={data.Applianceprice}
                      Quantity={data.Appliancequantity}
                      Total={data.Appliancetotal}
                    ></Card>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {Display ? (
        <div className="Container" id="container">
          <form>
            <div className="inputWraper" id="input">
              <select
                value={CurrentProduct}
                onChange={(e) => setProduct(e.target.value)}
                className="phones"
                id="phones"
              >
                {Options}
              </select>

              <input
                type="number"
                placeholder="quantity"
                value={Currentquantity}
                onChange={(e) =>
                  setquantity(Math.abs(parseInt(e.target.value)))
                }
              />

              <input
                type="text"
                placeholder="price"
                value={(CurrentPrice = Price(CurrentProduct))}
                onChange={() => setPrice(Price(CurrentProduct))}
              />

              <input
                type="text"
                placeholder="totalamount"
                value={
                  (Currenttotal = Multiple(
                    Price(CurrentProduct),
                    Currentquantity
                  ))
                }
                onChange={(e) => settotal(e.target.value)}
              />

              <button type="submit" onClick={displayData}>
                +
              </button>
            </div>
          </form>
        </div>
      ) : (
        " "
      )}
      {Display ? (
        <div>
          {newData !== null
            ? newData.map((values) => {
                return (
                  <>
                    <div>
                      <table id="datas">
                        <tbody>
                          <tr>
                            <td>{values.CurrentProduct}</td>
                            <td>{values.Currentquantity}</td>
                            <td>{values.CurrentPrice}</td>
                            <td>{values.Currenttotal}</td>
                            <td className="minus">
                              <button onClick={(e) => deleterow(e)}>-</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                );
              })
            : null}
        </div>
      ) : (
        " "
      )}
      {Display ? (
        <div className="Submit">
          <button onClick={Order} id="Submits">
            submit
          </button>
        </div>
      ) : (
        " "
      )}
      {/* {Display?
            <div>
                <button onClick={Order}>ok</button>
            </div>
            : ' '} */}
      <ToastContainer />
    </>
  );
};
export default Dataget;
