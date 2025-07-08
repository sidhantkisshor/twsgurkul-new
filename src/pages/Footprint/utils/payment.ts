export const handlePaymentPopup = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  
  // Create mobile-friendly popup
  const popup = window.open(
    'https://learn.tradingwithsidhant.com/web/checkout/67865c7a63edaa470ad42516?purchaseNow=true',
    'enrollment',
    'width=400,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
  );
  
  // Focus the popup if it opened successfully
  if (popup) {
    popup.focus();
  }
}; 