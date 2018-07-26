import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  constructor() { 
    this.data = {
      menus: [
        {
          title: 'Home',
          slug: 'header-wrap'
        },
        {
          title: 'About',
          slug: 'about'
        },
        {
          title: 'Schedules',
          slug: 'schedules'
        },
        {
          title: 'Speakers',
          slug: 'team'
        },
        {
          title: 'Gallery',
          slug: 'gallery'
        },
        {
          title: 'Faq',
          slug: 'faq'
        },
        {
          title: 'Sponsors',
          slug: 'sponsors'
        },
        {
          title: 'Pricing',
          slug: 'pricing'
        },
        {
          title: 'Contact',
          slug: 'google-map-area'
        }
      ],
      slides: [
        {
          title: 'Global Grand Event on Digital Design',
          description: 'Design Thinking Conference',
          image: 'assets/img/slider/slide1.jpg',
          delays: [6, 4],
          animations: ['fadeInUp', 'fadeInDown'],
          links: [
            {
              title: 'Get Ticket',
              slug: '',
              delay: 6,
              type: 'common',
              animation: 'fadeInLeft'
            }, 
            {
              title: 'Explore More',
              slug: '',
              delay: 6,
              type: 'border',
              animation: 'fadeInRight'
            }
          ]
        },
        {
          title: 'Global Grand Event on Digital Design',
          description: '22 Amazing Speakers',
          image: 'assets/img/slider/slide2.jpg',
          delays: [6, 7],
          animations: ['fadeInUp', 'bounceIn'],
          links: [
            {
              title: 'Learn More',
              slug: '',
              delay: 8,
              type: 'border',
              animation: 'fadeInUp'
            }
          ]
        },
        {
          title: 'Global Grand Event on Digital Design',
          description: 'Book Your Seat Now!',
          image: 'assets/img/slider/slide3.jpg',
          delays: [6, 6],
          animations: ['fadeInUp', 'fadeInUp'],
          links: [
            {
              title: 'Explore',
              slug: '',
              delay: 8,
              type: 'common',
              animation: 'fadeInUp'
            }
          ]
        }
      ]
    }
  }

  getData(name) {
    return this.data[name];
  }
}
