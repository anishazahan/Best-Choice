

const FormatePrice = ({price})=>{
        return  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',maximumFractionDigits: 2 }).format(price/10000);
}

export default FormatePrice
