export default function About() {
  return (
    <section className="mb-12" id="about">
      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
      <div className="bg-[#1e293b] rounded-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">1. Select Your Items</h3>
            <p className="text-gray-400 mb-4">
              Browse our selection of interplanetary products and add the ones
              you want to your cart.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              2. Choose Your Destination
            </h3>
            <p className="text-gray-400 mb-4">
              Specify the planet you want your items delivered to and review the
              delivery time and cost.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">3. Complete Your Order</h3>
            <p className="text-gray-400 mb-4">
              {
                "Provide your payment information and confirm your order. We'll blast off your items as soon as possible."
              }
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">4. Enjoy Your Purchase</h3>
            <p className="text-gray-400 mb-4">
              Sit back and relax while we deliver your items to your doorstep on
              your chosen planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
