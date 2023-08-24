import { Injectable } from '@nestjs/common';
import { parse } from 'csv-parse/sync';

@Injectable()
export class ApplicationService {
  public parseQSTCSV(csvData: string): {
    requisitionNumber: string | undefined;
    positionTitle: string | undefined;
    parsedData: Array<{
      firstName: string;
      lastName: string;
      ministry: string;
      deltek_id: string;
      city: string;
      email: string;
      jsonData: string;
    }>;
  } {
    // Split the CSV data into lines
    const lines = csvData.split('\n');

    const requisitionLine = lines.shift();
    const positionTitleLine = lines.shift();

    const requisitionNumber = requisitionLine?.split(',')[1];
    const positionTitle = positionTitleLine?.split(',')[1];

    const newCsvData = lines.join('\n');

    const rawParsedData = parse(newCsvData, {
      columns: true,
      skip_empty_lines: true,
    });

    const parsedData = rawParsedData.map((row) => {
      const {
        'Applicant First Name': firstName,
        'Applicant Last Name': lastName,
        'Current Ministry': ministry,
        '': _,
        id: deltek_id,
        City: city,
        Email: email,
        ...restData
      } = row;

      const jsonData = restData;
      return { firstName, lastName, ministry, deltek_id, city, email, jsonData };
    });
    return { requisitionNumber, positionTitle, parsedData };
  }
}

// TODO: improved version with validation
// import { Injectable, BadRequestException } from '@nestjs/common';
// import { parse } from 'csv-parse/sync';

// const REQUISITION_HEADER = 'Requisition No.';
// const POSITION_TITLE_HEADER = 'Position Title';

// @Injectable()
// export class ApplicationService {
//   public parseQSTCSV(csvData: string): {
//     requisitionNumber: string | undefined;
//     positionTitle: string | undefined;
//     parsedData: Array<{
//       firstName: string;
//       lastName: string;
//       ministry: string;
//       deltek_id: string;
//       city: string;
//       email: string;
//       jsonData: any;
//     }>;
//   } {
//     let parsedData: any;
//     let requisitionNumber: string | undefined;
//     let positionTitle: string | undefined;

//     try {
//       parsedData = parse(csvData, {
//         columns: true,
//         skip_empty_lines: true,
//       });
//     } catch (err) {
//       throw new BadRequestException('Invalid CSV format.');
//     }

//     if (parsedData && parsedData.length) {
//       const headers = Object.keys(parsedData[0]);
//       if (headers.includes(REQUISITION_HEADER)) {
//         requisitionNumber = parsedData.shift()[REQUISITION_HEADER];
//       }

//       if (headers.includes(POSITION_TITLE_HEADER)) {
//         positionTitle = parsedData.shift()[POSITION_TITLE_HEADER];
//       }
//     }

//     const formattedData = parsedData.map((row: any) => {
//       const {
//         'Applicant First Name': firstName,
//         'Applicant Last Name': lastName,
//         'Current Ministry': ministry,
//         id: deltek_id,
//         City: city,
//         Email: email,
//         ...restData
//       } = row;

//       return { firstName, lastName, ministry, deltek_id, city, email, jsonData: restData };
//     });

//     return { requisitionNumber, positionTitle, parsedData: formattedData };
//   }
// }
