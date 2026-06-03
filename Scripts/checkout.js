import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadproducts, loadproductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
  try{
  //  throw 'error1 '
      await loadproductsFetch();
      const value=await new Promise((resolve,reject) => {
      //  throw 'errot2';
        loadCart(() => {
           // reject('value3');
            resolve('value3');
        });
    })
}catch(error){
     console.log('Unexpected error.Please try again later.'); 
}
    renderOrderSummary();
    renderPaymentSummary();
  



}
loadPage(); 
/*
Promise.all([
    loadproductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })


]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
new Promise((resolve) => {


    loadproducts(() => {

        resolve('value1');
    });

}).then((value) => {
     console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

*/
/*
loadproducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
 
});
 */

