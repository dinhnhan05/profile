import React, { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import config from './config';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Profile = () => {

  const { username, repoName } = config;

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('starsCount').innerText = data.stargazers_count;
        document.getElementById('forksCount').innerText = data.forks_count;
      })
      .catch(error => console.error('Error fetching GitHub API:', error));
  }, [username, repoName]);
  return (
    <body className="flex items-center justify-center antialiased">
      <div className="profile flex-col w-11/12 sm:w-3/4" data-aos="fade" data-aos-duration="1700">
      <div className="relative">
      <a target="_blank" href="https://github.com/dinhnhan05/profile" rel="noreferrer" className="text-gray-100 hover:text-gray-300 transition duration-200 absolute top-2.5 right-0 text-[17px]"><i class="ri-download-2-fill"></i> Source Code</a></div>
        <div className="profile__header pt-6">
         
          <div className="profile__header_avatar relative">
            <img className="w-40 h-40 object-cover rounded-full shadow-xl border-2 border-indigo-600" src="https://i.imgur.com/YjUOCis.jpg" alt="" />
          </div>
          <h2 className="profile__header_name my-3.5 font-extrabold text-[32px]">
            <span className="hello">
              Hello there
            </span>
            , My name is{' '}
            <span className="name">
              Nguyen Dinh Nhan
            </span>
          </h2>
        </div>
        
        <ul className="profile__social flex items-center gap-x-1 my-2 text-white-600">
  <li className="hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200">
    <a target="_blank" href="https://www.facebook.com/KiryosDinhNhan?mibextid=ZbWKwL" rel="noreferrer">
      <i className="ri-facebook-circle-fill text-2xl"></i>
    </a>
  </li>
  <li className="hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 cursor-pointer">
    <a target="_blank" href="https://t.me/dinhnhanzz" rel="noreferrer">
      <i className="ri-telegram-line text-2xl"></i>
    </a>
  </li>
  <li className="hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 cursor-pointer">
    <a target="_blank" href="https://github.com/dinhnhan05" rel="noreferrer">
      <i className="ri-github-line text-2xl"></i>
    </a>
  </li>
</ul>

        <div className="profile__content">
          <p className="text-gray-300 text-lg font-normal my-2">
            I'm currently 18 years old from <strong>Gia Lai, Vietnam</strong>. My hobbies are playing soccer, playing
            games, and watching movies. In my free time, I often listen to music or write website code. I'm quite
            interested in writing website code. I often use{' '}
            <strong>HTML, CSS, JavaScript, TailwindCss, ReactJs, NextJs, and etc...</strong> You can contact and connect.Wish you a nice day
          </p></div>

          <h3 className="profile__title text-center text-xl font-bold"><strong>#</strong> Join my <span>community</span></h3>
    <div className="profile__community">
      <div className="flex items-center sm:w-7/12 sm:mx-auto my-1.5">
  <div className="mr-4">
    <img className="w-20 h-20" src="https://www.logo.wine/a/logo/Reddit/Reddit-Logomark-Color-Logo.wine.svg" alt="" />
  </div>
  <div className="flex-grow">
    <div className="mb-2">
      <h3 className="text-xl font-bold">Reddit</h3>
    </div>
    <div>
      <span className="text-gray-600 underline underline-offset-2 text-lg hover:text-blue-500 cursor-pointer transition duration-150"><a className="ml-auto" target="_blank" rel="noreferrer" href="https://www.reddit.com/r/KiryosForum?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=2"><span><i className="ri-link"></i>
      </span> r/KiryosForum</a></span>
    </div>
  </div>
</div>
        </div>
        <hr className="hr" />
        <footer className="profile__footer text-center my-3">
      <div className="flex items-center justify-center">
      <div id="profile__footer_stars" className="mr-2">
        <span id="starsCount"></span>
        <i className="fa-regular fa-star text-blue-600 ml-1"></i>
      </div>
      <div id="profile__footer_forks">
        <span id="forksCount"></span>
        <i className="fa-solid fa-code-fork text-blue-600 ml-1"></i>
      </div>
      </div>
      <div className="profile__footer_vercel text-base font-bold text-zinc-300">Deployed to
      <svg fill="none" height="20" viewBox="0 0 282.72 64" width="82" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5zM36.95 0L73.9 64H0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#fcfcfc"/></svg></div>
      <h4 className="text-lg font-semibold">@ All right reserved - 2024</h4>
    </footer>
      </div>
    </body>
  );
};

export default Profile;
