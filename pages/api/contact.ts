var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT }).base(
  "appHn7dSfKItlOEcO"
);

export default function handler(
  req: { body: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { data: string }): void; new (): any };
    };
  }
) {
  // Get data submitted in request's body.
  console.log("Hello");
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  // if (!body.fullName || !body.last) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: "Form incomplete." });
  // }

  // Form seems to be complete
  base("Landing Site").create(
    [
      {
        fields: {
          Name: body.fullName,
          Email: body.email,
          Organization: body.organization,
          Phone: body.phone,
          Message: body.message,
          Region: body.region,
          "Inquiry Type": body.inquiryType,
        },
      },
    ],
    function (err: any, records: any[]) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );

  // Sends a HTTP success code
  res.status(200).json({ data: `success` });
}
