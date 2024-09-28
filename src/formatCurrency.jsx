const defaultCarrency = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
});

const formatCurrency = (number) => {
  return defaultCarrency.format(number);
};

export default formatCurrency;
