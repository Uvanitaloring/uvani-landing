export default function RefundCancellationPolicy() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>
      <p className="mb-4">
        At Uvani, we strive to deliver the best experience to our users. This policy outlines the
        conditions for refunds and cancellations.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Cancellations</h2>
      <p className="mb-4">
        You may cancel your order or booking within 24 hours of purchase. After this window,
        cancellations may not be eligible for a refund.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Refunds</h2>
      <p className="mb-4">
        Refunds (if applicable) will be processed to your original payment method within 5-7
        business days after approval.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
      <p>
        For cancellation or refund requests, please email us at{' '}
        <a href="mailto:support@uvani.in" className="underline text-blue-600">
          support@uvani.in
        </a>.
      </p>
    </main>
  );
}
