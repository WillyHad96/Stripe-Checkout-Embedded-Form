// This is your test publishable API key.
const stripe = Stripe("pk_test_51ONgZlK2btjRP0oVR8Lu2JNcKrMGD3Up2AaqHLiNlphBhALBSgvhD7HO7xwLgf7saHYx56RiBAIqm0g5dqdIKSrh00JIwClKhL");

initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
  });

  const { clientSecret } = await response.json();

  const checkout = await stripe.initEmbeddedCheckout({
    clientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}