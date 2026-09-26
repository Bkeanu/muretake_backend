require('dotenv').config();

const token = process.env.SMS_API_TOKEN;

console.log(
  'TOKEN LOADED:',
  Boolean(token),
  'LENGTH:',
  token?.length,
);

async function test() {
  try {
    const response = await fetch(
      'https://messaging-service.co.tz/api/sms/v2/test/text/single',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({}),
      },
    );

    console.log('STATUS:', response.status);
    console.log('BODY:', await response.text());
  } catch (error) {
    console.error('ERROR:', error.message);
    console.error('CAUSE:', error.cause);
  }
}

test();