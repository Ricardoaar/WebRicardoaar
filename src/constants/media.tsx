import React, { ReactElement } from "react";

type SocialMedia = {
  link: string;
  icon: string | ReactElement;
  name: string;
}

export const SOCIAL_MEDIA: SocialMedia[] = [{
  link: "https://www.linkedin.com/in/ricardoaar/",
  icon: <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.5714 1.9375H1.42411C0.638393 1.9375 0 2.58887 0 3.38848V20.6115C0 21.4111 0.638393 22.0625 1.42411 22.0625H18.5714C19.3571 22.0625 20 21.4111 20 20.6115V3.38848C20 2.58887 19.3571 1.9375 18.5714 1.9375ZM6.04464 19.1875H3.08036V9.5832H6.04911V19.1875H6.04464ZM4.5625 8.27148C3.61161 8.27148 2.84375 7.49434 2.84375 6.54199C2.84375 5.58965 3.61161 4.8125 4.5625 4.8125C5.50893 4.8125 6.28125 5.58965 6.28125 6.54199C6.28125 7.49883 5.51339 8.27148 4.5625 8.27148ZM17.1562 19.1875H14.192V14.5156C14.192 13.4016 14.1696 11.9686 12.6518 11.9686C11.1071 11.9686 10.8705 13.1814 10.8705 14.4348V19.1875H7.90625V9.5832H10.75V10.8949H10.7902C11.1875 10.1402 12.1563 9.34512 13.5982 9.34512C16.5982 9.34512 17.1562 11.3352 17.1562 13.9227V19.1875Z"
      fill="white" />
  </svg>,
  name: "LinkedIn"
}, {
  link: "https://github.com/Ricardoaar",
  name: "GitHub",
  icon: <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_105_2)">
      <path
        d="M7.02399 17.0758C7.02399 17.1617 6.92661 17.2305 6.80383 17.2305C6.66411 17.2434 6.56673 17.1746 6.56673 17.0758C6.56673 16.9898 6.66411 16.9211 6.7869 16.9211C6.91391 16.9082 7.02399 16.977 7.02399 17.0758ZM5.70726 16.8824C5.67762 16.9684 5.7623 17.0672 5.88931 17.093C5.9994 17.1359 6.12641 17.093 6.15181 17.007C6.17722 16.9211 6.09677 16.8223 5.96976 16.7836C5.85968 16.7535 5.7369 16.7965 5.70726 16.8824ZM7.57863 16.8094C7.45585 16.8395 7.37117 16.9211 7.38387 17.0199C7.39657 17.1059 7.50665 17.1617 7.63367 17.1316C7.75645 17.1016 7.84113 17.0199 7.82843 16.934C7.81573 16.8523 7.70141 16.7965 7.57863 16.8094ZM10.3645 0.34375C4.49214 0.34375 0 4.86836 0 10.8281C0 15.5934 2.95524 19.6711 7.17641 21.1063C7.71835 21.2051 7.90887 20.8656 7.90887 20.5863C7.90887 20.3199 7.89617 18.8504 7.89617 17.948C7.89617 17.948 4.93246 18.5926 4.31008 16.6676C4.31008 16.6676 3.82742 15.4172 3.13306 15.0949C3.13306 15.0949 2.16351 14.4203 3.20081 14.4332C3.20081 14.4332 4.25504 14.5191 4.83508 15.5418C5.7623 17.2004 7.31613 16.7234 7.92157 16.4398C8.01895 15.7523 8.29415 15.2754 8.59899 14.9918C6.23226 14.7254 3.84436 14.3773 3.84436 10.2437C3.84436 9.06211 4.16613 8.46914 4.84355 7.71289C4.73347 7.43359 4.37359 6.28203 4.95363 4.79531C5.83851 4.51602 7.875 5.95547 7.875 5.95547C8.72177 5.71484 9.63206 5.59023 10.5339 5.59023C11.4357 5.59023 12.346 5.71484 13.1927 5.95547C13.1927 5.95547 15.2292 4.51172 16.1141 4.79531C16.6942 6.28633 16.3343 7.43359 16.2242 7.71289C16.9016 8.47344 17.3165 9.06641 17.3165 10.2437C17.3165 14.3902 14.8228 14.7211 12.456 14.9918C12.8456 15.3313 13.1758 15.9758 13.1758 16.9855C13.1758 18.4336 13.1631 20.2254 13.1631 20.5777C13.1631 20.857 13.3579 21.1965 13.8956 21.0977C18.1294 19.6711 21 15.5934 21 10.8281C21 4.86836 16.2369 0.34375 10.3645 0.34375ZM4.11532 15.1637C4.06028 15.2066 4.07298 15.3055 4.14496 15.3871C4.2127 15.4559 4.31008 15.4859 4.36512 15.4301C4.42016 15.3871 4.40746 15.2883 4.33548 15.2066C4.26774 15.1379 4.17036 15.1078 4.11532 15.1637ZM3.65806 14.8156C3.62843 14.8715 3.67077 14.9402 3.75544 14.9832C3.82319 15.0262 3.90786 15.0133 3.9375 14.9531C3.96714 14.8973 3.9248 14.8285 3.84012 14.7855C3.75544 14.7598 3.6877 14.7727 3.65806 14.8156ZM5.02984 16.3453C4.9621 16.4012 4.9875 16.5301 5.08488 16.6117C5.18226 16.7105 5.30504 16.7234 5.36008 16.6547C5.41512 16.5988 5.38972 16.4699 5.30504 16.3883C5.2119 16.2895 5.08488 16.2766 5.02984 16.3453ZM4.54718 15.7137C4.47944 15.7566 4.47944 15.8684 4.54718 15.9672C4.61492 16.066 4.72923 16.109 4.78427 16.066C4.85202 16.0102 4.85202 15.8984 4.78427 15.7996C4.725 15.7008 4.61492 15.6578 4.54718 15.7137Z"
        fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_105_2">
        <rect width="21" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>


}, {
  link: "https://Ricardo.rito.a@gmail.com",
  name: "Gmail",
  icon: <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.4375 3.25C1.0918 3.25 0 4.3418 0 5.6875C0 6.4543 0.360547 7.17539 0.975 7.6375L12.025 15.925C12.6039 16.3566 13.3961 16.3566 13.975 15.925L25.025 7.6375C25.6395 7.17539 26 6.4543 26 5.6875C26 4.3418 24.9082 3.25 23.5625 3.25H2.4375ZM0 8.9375V19.5C0 21.2926 1.45742 22.75 3.25 22.75H22.75C24.5426 22.75 26 21.2926 26 19.5V8.9375L14.95 17.225C13.7922 18.0934 12.2078 18.0934 11.05 17.225L0 8.9375Z"
      fill="white" />
  </svg>

}, {
  link: "https://w.app/Ka7je8",
  name: "WhatsApp",
  icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
    <g fillOpacity="0" fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
       strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none"
       fontWeight="none" fontSize="none" textAnchor="none">
      <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
    </g>
    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter"
       strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none"
       fontSize="none" textAnchor="none">
      <g transform="scale(5.12,5.12)">
        <path
          d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
      </g>
    </g>
  </svg>
}];