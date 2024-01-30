//Mocking Data File

interface MockObject {
  // Define the structure of your object here
  organization: string
  username: string
  email: string
  phone: string
  date: Date
  status: string
}

function getRandomDate(startDate: Date, endDate: Date): Date {
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
    const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
    return new Date(randomTimestamp);
}

function createArrayOfObjects(templateObjects: MockObject[], totalCount: number): MockObject[] {
    const objectsPerTemplate = Math.floor(totalCount / templateObjects.length);
    const arrayOfObjects: MockObject[] = [];

    for (const templateObject of templateObjects) {
        for (let i = 1; i <= objectsPerTemplate; i++) {
            // You can customize the object creation based on your needs
            const newObj: MockObject = {
                id: (arrayOfObjects.length * objectsPerTemplate) + i,
                organization: templateObject.organization,
                username: templateObject.username,
                email: templateObject.email,
                phone: templateObject.phone,
                date: getRandomDate(new Date(2020, 0, 1), new Date()),
                status: templateObject.status,
            };

            arrayOfObjects.push(newObj);
        }
    }

    return arrayOfObjects;
}


const templateObjects: MockObject[] = [
  {
    organization: 'lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phone: '08078903721',
    date: new Date(),
    status: 'Inactive'
  },
  {
    organization: 'Irorun',
    username: 'Debby Ogana',
    email: 'debby2@irorun.com',
    phone: '08160780928',
    date: new Date(),
    status: 'Pending'
  },
  {
    organization: 'lendstar',
    username: 'Grace Effiom',
    email: 'grace@lendstar.com',
    phone: '07060780922',
    date: new Date (),
    status: 'Blacklisted'
  },
  {
    organization: 'lendsqr',
    username: 'Tosin Dokunmu',
    email: 'tosin@lendsqr.com',
    phone: '07003309226',
    date: new Date (),
    status: 'Active'
  }
]

export const resultArray: MockObject[] = createArrayOfObjects(templateObjects, 500);
