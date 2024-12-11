export function generateQuoteRequestEmailTemplate(
  id: string,
  sanitizedData: any
) {
  const messageContent = `
              <p>A new cleaning quote request has been submitted! Here are the details:</p>
              <ul>
                <li><strong>Full Name:</strong> ${
                  sanitizedData.fullName || 'N/A'
                }</li>
                <li><strong>Email:</strong> ${
                  sanitizedData.email || 'No Email'
                }</li>
                <li><strong>Phone Number:</strong> ${
                  sanitizedData.phoneNumber || 'No Phone Number'
                }</li>
                <li><strong>Postcode:</strong> ${
                  sanitizedData.postcode || 'No Postcode'
                }</li>
                <li><strong>Type of Cleaning:</strong> ${
                  sanitizedData.cleaningType || 'Not Specified'
                }</li>
                <li><strong>Service Level:</strong> ${
                  sanitizedData.serviceLevel || 'Standard'
                }</li>
                <li><strong>Rooms:</strong> ${
                  sanitizedData.rooms || 'Not Provided'
                }</li>
                <li><strong>Bathrooms:</strong> ${
                  sanitizedData.bathrooms || 0
                }</li>
                <li><strong>Kitchens:</strong> ${
                  sanitizedData.kitchens || 0
                }</li>
                <li><strong>Oven Cleaning:</strong> ${
                  sanitizedData.ovenCleaning ? 'Yes' : 'No'
                }</li>
              </ul>
              <p><strong>Additional Information:</strong> ${
                sanitizedData.additionalInfo || 'No Additional Info'
              }</p>
              <p>Your request has been received and is currently marked as ${
                sanitizedData.status || 'awaitingQuote'
              }. We will get back to you shortly.</p>
              <p><a href="https://bt-admin-flame.vercel.app/requests/show/${id}"><strong>View Request</strong></a></p>
            `
  return messageContent
}
