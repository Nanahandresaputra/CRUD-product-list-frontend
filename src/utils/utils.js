function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", { maximumSignificantDigits: 2, style: "currency", currency: "IDR" }).format(number);
}

export default formatRupiah;
