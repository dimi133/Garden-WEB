import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: 'empty',
    list: []
};

export const fetchAllProducts = createAsyncThunk(
    'allProducts/fetchAllProducts',
    async () => {
        const resp = await fetch('http://localhost:3333/products/all');
        const data = await resp.json();
        return data
        
    }
)

const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        priceFilter(state, {payload}){
            state.list = state.list.map(elem => {
                const discountedPrice = 
                    elem.discont_price && elem.discont_price < elem.price
                    ? elem.discont_price
                    : elem.price;
                return{
                //     ...elem, 
                //     show: {
                //         ...elem.show,
                //         // price: elem.price >= payload.min && elem.price <= payload.max
                //         price: elem.price >= payload.min && discountedPrice <= payload.max,
                //         discounted: 
                //             !payload.showDiscounted || (payload.showDiscounted && elem.discont_price)
                //     }
                // }
                        ...elem,
                show: {
                    ...elem.show,
                    price:
                    discountedPrice >= payload.min && discountedPrice <= payload.max,
                    discounted:
                        !payload.showDiscounted ||
                        (payload.showDiscounted && elem.discont_price),
                },
            };
        });      
        },
        sale(state){
            if (state.showDiscounted === undefined) {
                state.showDiscounted = true;
              } else {
            state.showDiscounted = !state.showDiscounted;
              }
            if(state.showDiscounted){
                state.listBeforeFilter = state.list.slice();
                state.list = state.list.filter(item => item.discont_price)
            }else{
                state.list = state.listBeforeFilter || state.list;
            }
        },
        sortBy(state, {payload}){
            if(payload === 1){
                state.list.sort((a, b) => a.title.localeCompare(b.title))
            }else if (payload === 2){
                state.list.sort((a, b) => b.title.localeCompare(a.title))
            }else if(payload === 3){
                state.list.sort((a, b) => a.price - b.price)
            }else if(payload === 4){
                state.list.sort((a, b) => b.price - a.price)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProducts.fulfilled, (state, {payload}) => {
                state.status = 'ready'
                const show = {price: true}
                state.list = payload.map(elem => ({...elem, show}))
                
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export default allProductsSlice.reducer;
export const { priceFilter, sale, sortBy } = allProductsSlice.actions;