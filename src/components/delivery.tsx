export default function Delivery() {
  return (
    <section className="mb-12" id="delivery">
      <h2 className="text-3xl font-bold mb-4">Delivery Information</h2>
      <div className="bg-[#1e293b] rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Rocket-Powered Delivery</h3>
        <p className="text-gray-400 mb-4">
          We use the latest in rocket technology to deliver your purchases to
          any planet in the solar system. Our fleet of high-speed rockets can
          reach even the most distant destinations in record time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">Delivery Times</h4>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Earth: 1-2 days</li>
              <li>Mars: 3-5 days</li>
              <li>Jupiter: 7-10 days</li>
              <li>Neptune: 14-21 days</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Delivery Costs</h4>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Earth: $9.99</li>
              <li>Mars: $49.99</li>
              <li>Jupiter: $99.99</li>
              <li>Neptune: $199.99</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
