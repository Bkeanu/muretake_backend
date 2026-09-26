require('dotenv').config();

const { sendSms } = require('./src/services/sms.service');

async function test() {
  try {
    const result = await sendSms({
      // Put YOUR phone number here locally.
      // Don't send it to me.
      to: '0787817860',

      text: 'Please lets talk on whatsapp one more time (STAN)',

      reference: `muretake-test-${Date.now()}`,
    });

    console.log('SMS TEST SUCCESS');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('SMS TEST FAILED');
    console.error(error.message);

    if (error.providerResponse) {
      console.error(
        JSON.stringify(error.providerResponse, null, 2),
      );
    }
  }
}

test();