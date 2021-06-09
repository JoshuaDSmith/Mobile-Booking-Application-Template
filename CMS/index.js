import React, {useState} from 'react';
import Image1 from '../Assets/Images/andre-benz-JCjGpD84N0I-unsplash.jpg';
import Image2 from '../Assets/Images/brooke-cagle-k9XZPpPHDho-unsplash.jpg';
import Image3 from '../Assets/Images/nicole-geri-FavlcROocr0-unsplash.jpg';
import Image4 from '../Assets/Images/obafemi-moyosade-zndslHAXhAw-unsplash.jpg';
import Image5 from '../Assets/Images/taylor-NeTf7NGXrtc-unsplash.jpg';
import Image6 from '../Assets/Images/vidar-nordli-mathisen-iTOq8vZkVEY-unsplash.jpg';

import Venue1 from '../Assets/Images/Venues/alessandra-onisor-uH9gcWRCN6s-unsplash.jpg';
import Venue2 from '../Assets/Images/Venues/bobby-allen-qQbmbyDTDYg-unsplash.jpg';
import Venue3 from '../Assets/Images/Venues/chasse-sauvage-cKupNvXrU4I-unsplash.jpg';
import Venue4 from '../Assets/Images/Venues/drew-dau-GEdoSfYHsPs-unsplash.jpg';
import Venue5 from '../Assets/Images/Venues/ibrahim-boran-m8YjB0noWiY-unsplash.jpg';
import Venue6 from '../Assets/Images/Venues/joseph-pearson-FrmpLKLNgNw-unsplash.jpg';
import Venue7 from '../Assets/Images/Venues/photos-by-lanty-dcb2pog89fQ-unsplash.jpg';
import Venue8 from '../Assets/Images/Venues/robert-mathews-xXaLfz6V9rQ-unsplash.jpg';

const Component1 = {
  Title: 'Our Venues',
  Image: Image1,
  Desc: `Music Venue Trust represents 670 independent UK music venues right across the UK and as a result of the current lockdown and social distancing policies the prospects for many are grim. \n \n A lot of grassroots music venues are already operating on very thin margins and since these
restrictions came in only 17% of them, equating to just 114, are currently secure for the next eight weeks. \n\n The other 556 are at imminent risk of being permanently closed down. The situation is dire and it is now incumbent on music fans and the wider industry to do something about it.`,
  ButtonText: `OUR VENUES`,
};

const Component2 = {
  Title: 'Our Passion',
  Image: Image2,
  Desc: `Give customers a great experience, and they'll buy more, be more loyal and share their ... Bad experiences are driving customers away—faster than you think. At PrimeTime, our purpose is to build trust in society and solve important problems.`,

  ButtonText: `CONTACT US`,
};

const Component3 = [Image3, Image4, Image5, Image6];

const Component4 = [
  {
    Image1: Image3,
    Title: 'Felipe Lobos',
    Desc: `One of the most cerebral and enigmatic artists active since the mid-2000s, Lupe Fiasco is also among the more prominent artists in his field, as proven by Grammy recognition and several gold and platinum certifications. It took the rapper and producer a few years to gain traction, but his name has been well-known since his featured appearance on Kanye West's "Touch the Sky" (2005), `,
  },
  {
    Image1: Image4,
    Title: 'Daniel Casear',
    Desc: `Just out of high school when he made his commercial debut with the ballad "Location" (2016), non-traditional R&B singer and songwriter Khalid has attracted a large following with an undemonstrative but heartfelt vocal style and a down-to-earth perspective. `,
  },
  {
    Image1: Image5,
    Title: 'Simone Barnett',
    Desc: `Jessica Reyez was born on June 12, 1991 in the Jane and Finch area of Toronto, Ontario to Colombian parents. She was introduced to the guitar by her father, leading to a career in art and music. She played guitar as a child and began writing her own music in high school. Jessie and her family then moved to Brampton.`,
  },
  {
    Image1: Image6,
    Title: 'Molly Park',
    Desc: `a hip hop anomaly, a rank outsider who gained acceptance in the world of urban music before conquering the pop mainstream. A sassy blonde white Australian who raps in an incongruous Southern drawl, she has nevertheless become one of the most successful rappers of recent times.`,
  },
];

const Component5 = [
  {
    Header1: 'Contact Us',
    Header2: 'Get Involved',
    Header3: 'Make An Appoint',
    Header4: 'Meet Our Team',
  },
  {
    Header1: 'Assessibility',
    Header2: 'Light / Dark Theme',
    Header3: 'Register an Artist',
    Header4: 'Register a Venue',
  },
  {
    Header1: 'Contact Us',
    Header2: 'Get Involved',
    Header3: 'Make An Appoint',
    Header4: 'Meet Our Team',
  },
  {
    Header1: 'Assessibility',
    Header2: 'Light / Dark Theme',
    Header3: 'Register an Artist',
    Header4: 'Register a Venue',
  },
];

const VenueComponent = [
  {
    number: 1,
    Image1: Venue1,
    Title: 'Bickersmith House',
    Desc:
      'originally the Rauza-i-munawwara is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. \n\n It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house',
    Price: 850,
  },
  {
    number: 2,
    Image1: Venue2,
    Title: 'Village Oak',
    Desc: `Is the world's largest art museum and a historic monument in Paris, France, and is best known for being the home of the Mona Lisa. \n\n A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters (782,910 square feet).`,
    Price: 1243,
  },
  {
    number: 3,
    Image1: Venue3,
    Title: 'The Blue Piano',
    Desc: `The Hunter Club is a grassroots music venue, bar and multi-purpose event space in the heart of Bury St. Edmunds. \n\n The venue is located a short walk from the town centre and we pride ourselves on being a free house and the best independent bar and venue in the area.We are pleased to be hosting a full schedule of socially-distanced gigs, courtesy of the Arts Council Cultural Recovery Grant. Please see our events page for details. All tickets to gigs must be purchased in advance. `,
    Price: 950,
  },
  {
    number: 4,
    Image1: Venue4,
    Title: 'Chesterfield Oak',
    Desc: `O2 Academy Birmingham originally opened in the city in 2000 in Dale End with the venue bringing live music to the Midlands for almost a decade before it moved to its current home in Horsefair in 2009. \n\n The building in Dale End was steeped in musical heritage, it opened first as The Ballroom and then as the Top Rank Suite in the 1960s. `,
    Price: 1878,
  },
  {
    number: 5,
    Image1: Venue5,
    Title: 'The Burkshires',
    Desc: `Birmingham Academy opened to the public on 16 November 2000 with an outstanding show from Ocean Colour Scene. \n\n The venue’s launch was highly anticipated and the Birmingham Post said: “That the Academy in Dale End has reinvigorated the city’s music scene is beyond doubt.`,
    Price: 1100,
  },
  {
    number: 6,
    Image1: Venue6,
    Title: 'Dark Apple Venue',
    Desc: `A music venue is any location used for a concert or musical performance. \n\n Music venues range in size and location, from a small coffeehouse for folk music shows, an outdoor bandshell or bandstand or a concert hall to an indoor sports stadium`,
    Price: 632,
  },
  {
    number: 7,
    Image1: Venue7,
    Title: 'Bali Brooks',
    Desc: ` Music Venue Trust is today launching a Grassroots Music Venue Crisis Fund. \n\n The GMVCF will give MVT the funding it needs to place its existing Emergency Response service on a crisis footing. Last year, the Emergency Response Service prevented 91 closures in 12 months.`,
    Price: 799,
  },
  {
    number: 8,
    Image1: Venue8,
    Title: 'Overbrook Homes',
    Desc: `Sheung Wan Civic Centre is a performing arts centre located in the Sheung Wan Municipal Services Building, on Queen's Road Central, Sheung Wan, Hong Kong. \n\n It is a popular theatre venue in Hong Kong. Sheung Wan Civic Centre is one of the subsidiary community arts centres under the Leisure and Cultural Services Department, offers 9 hiring units: Theatre, Lecture Hall, Exhibition Hall, Rehearsal Hall, Dance Practice Room, Art Studio 1 & 2`,
    Price: 1535,
  },
];
const Directory = ['Homepage', 'ContactUs'];

const ContactInformation = [
  {
    Directory: 'Customer experience',
    Tel: '066-xxx-xxxx',
    Email: 'TestCustomerServices@Gmail.com',
    Description: 'Issues relating to purchased Tickets, resale and errors',
  },
  {
    Directory: 'Accounts Management',
    Tel: '521-xxx-xxxx',
    Email: 'TestAccounts@Gmail.com',
    Description: 'Purchasing Errors, refunds and Cancel ongoing subscriptions',
  },
  {
    Directory: 'Hire a Venue',
    Tel: '326-xxx-xxxx',
    Email: 'TestBookingVenue@Gmail.com',
    Description:
      'Like want you see, Please ensure your booking 2 months in advance',
  },
  {
    Directory: 'Online Assistance',
    Tel: '746-xxx-xxxx',
    Email: 'TestBookingVenue@Gmail.com',
    Description: 'Difficulty finding what you need? Call us for assistance',
  },
];

const CheckoutSystemValues = {
  FirstName: 'First Name:',
  LastName: 'LastName:',
  Email: 'Email Address:',
  Telephone: 'Telephone No:',
  Telephone2: 'Alternative No:',
  Address: 'Full Address:',
  PostCode: 'Post Code:',
  Price: 'Cost:',
};

export {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Directory,
  VenueComponent,
  ContactInformation,
  CheckoutSystemValues,
};
