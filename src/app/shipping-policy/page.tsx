export default function ShippingPolicy() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Shipping & Delivery Policy</h1>
      <p className="mb-4">
        Uvani provides digital services and instant access to our platform after successful signup and
        payment.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Delivery Timelines</h2>
      <p className="mb-4">
        For digital products/services, access is provided instantly after payment confirmation. In
        case of any technical delay, please contact our support team.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Support</h2>
      <p>
        For any delivery-related queries, please email us at{' '}
        <a href="mailto:support@uvani.in" className="underline text-blue-600">
          support@uvani.in
        </a>.
      </p>
    </main>
  );
}
