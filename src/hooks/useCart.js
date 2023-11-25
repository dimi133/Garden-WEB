import { useSelector } from "react-redux";

export function useCart (){
    const allProducts = useSelector(state => state.allProducts);
    const {status, list} = allProducts;

    const cart =useSelector(state => state.cart);



    if(status !== 'ready'){
        return []
    }
   const result =cart.list.map(item => {
        const product = list.find(({id}) => id === item.id)
        return {...item, ...product}
    })
    return result
}
