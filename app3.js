const cheerio = require("cheerio");
const markup = `
    <!---->
    <!---->
    <code id="darkModeLixValue" style="display: none"><!--"enabled-light"--></code>

    <code id="isThemeTrackingEnabled" style="display: none"><!--true--></code>

    <code id="isMercadoEnabled" style="display: none"><!--true--></code>

    <!---->

    <nav class="nav_v2 badge-redesign mercado-nav" role="none">
        <ol id="primary-nav" role="tablist">




            <li class="nav-item  " data-nav-type="HOME" data-litms-tracking-control-name>
                <a href="/feed/" class="nav-link" id="nav-home-small" aria-label="Home" role="tab">
                    <div class="icon-container">
                        <div class="icon-with-badge-wrapper">
                            <li-icon category="ui" class="icon" data-inline-svg="true" type="nav-home-small-icon">

                                <!----> <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" id="home-medium"
                                    data-supported-dps="24x24" fill="currentColor">
                                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                                </svg>
                                <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

                            </li-icon>
                            <span id="nav-home-small-badge" class="badge hidden small-inverse"></span>
                            <!---->
                        </div>
                        <div class="nav-icon-content">Home</div>
                    </div>
                </a>
            </li>





            <li class="nav-item  " data-nav-type="NETWORK" data-litms-tracking-control-name>
                <a href="https://www.linkedin.com/mynetwork/" class="nav-link" id="nav-people-small"
                    aria-label="My Network" role="tab">
                    <div class="icon-container">
                        <div class="icon-with-badge-wrapper">
                            <li-icon category="ui" class="icon" data-inline-svg="true" type="nav-people-small-icon">

                                <!----><!----><!----><!----><!----> <svg xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 24 24" id="people-medium" data-supported-dps="24x24"
                                    fill="currentColor">
                                    <path
                                        d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z">
                                    </path>
                                </svg>
                                <!----><!----><!----><!----><!----><!----><!----><!---->

                            </li-icon>
                            <span id="nav-people-small-badge" class="badge hidden small-inverse"></span>
                            <!---->
                        </div>
                        <div class="nav-icon-content">My Network</div>
                    </div>
                </a>
            </li>





            <li class="nav-item  " data-nav-type="POST" data-litms-tracking-control-name="primary_navigation_post">
                <a href="/share" class="nav-link" id="nav-post-small" aria-label="Post" role="tab">
                    <div class="icon-container">
                        <div class="icon-with-badge-wrapper">
                            <li-icon category="ui" class="icon" data-inline-svg="true" type="nav-post-small-icon">

                                <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" id="post-fill-medium"
                                    data-supported-dps="24x24" fill="currentColor">
                                    <path
                                        d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-5 8h4v2h-4v4h-2v-4H7v-2h4V7h2z">
                                    </path>
                                </svg>
                                <!----><!----><!---->

                            </li-icon>
                            <!---->
                        </div>
                        <div class="nav-icon-content">Post</div>
                    </div>
                </a>
            </li>





            <li class="nav-item  " data-nav-type="NOTIFICATIONS" data-litms-tracking-control-name>
                <a href="https://www.linkedin.com/notifications/" class="nav-link" id="nav-notifications-small"
                    aria-label="Notifications" role="tab">
                    <div class="icon-container">
                        <div class="icon-with-badge-wrapper">
                            <li-icon category="ui" class="icon" data-inline-svg="true"
                                type="nav-notifications-small-icon">

                                <!----><!----><!----><!----><!----><!----><!----><!----><!----> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" id="bell-fill-medium"
                                    data-supported-dps="24x24" fill="currentColor">
                                    <path
                                        d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z">
                                    </path>
                                </svg>
                                <!----><!----><!----><!---->

                            </li-icon>
                            <span id="nav-notifications-small-badge" class="badge hidden small-inverse"></span>
                            <span class="default-label visually-hidden">Notifications</span>
                            <span class="singular-label visually-hidden">Notification</span>
                        </div>
                        <div class="nav-icon-content">Notifications</div>
                    </div>
                </a>
            </li>





            <li class="nav-item  " data-nav-type="JOBS" data-litms-tracking-control-name>
                <a href="https://www.linkedin.com/jobs/" class="nav-link" id="nav-jobs-small" aria-label="Jobs"
                    role="tab">
                    <div class="icon-container">
                        <div class="icon-with-badge-wrapper">
                            <li-icon category="ui" class="icon" data-inline-svg="true" type="nav-jobs-small-icon">

                                <!----><!----><!----> <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"
                                    id="job-medium" data-supported-dps="24x24" fill="currentColor">
                                    <path
                                        d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z">
                                    </path>
                                </svg>
                                <!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

                            </li-icon>
                            <!---->
                        </div>
                        <div class="nav-icon-content">Jobs</div>
                    </div>
                </a>
            </li>

        </ol>






        <section id="secondary-nav">
            <a href="/mwlite/me" id="self-profile-logo" title="Profile">
                <img class="person-entity-small hidden">
                <i class="person-entity-small ghost" role="presentation" aria-hidden="true"
                    data-ghost-image="person-2"></i>
            </a>
            <section class="nav-search-container" id="nav-search">
                <form class="search-bar" method="get" action="/mwlite/search/results/all?origin=GLOBAL_SEARCH_HEADER"
                    novalidate>








                    <section class="search-fields-section new-search-input">
                        <section class="form-control" id="search-universal">
                            <button id="nav-back" class="back-button" aria-label="Back" type="button">
                                <li-icon class="icon" category="system-icons" type="arrow-left-medium"></li-icon>
                            </button>
                            <input id="search-input" name="keywords" class="search-text large-semibold"
                                autocomplete="off" placeholder="Search" aria-label data-container="#search"
                                type="search">
                            <li-icon class="search-keyword-icon" aria-hidden="true" category="system-icons"
                                type="search-medium"></li-icon>

                            <div class="search-input-spinner hidden" role="presentation">
                                <li-icon category="ui" class="blue" data-inline-svg="true" type="loader-small">

                                    <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                    <svg id="loader" x="50%" y="50%" width="60px" height="60px" viewbox="0 0 60 60">
                                        <g class="small-icon"
                                            style="fill-opacity: 1;-webkit-transform: translate(15px, 15px) scale(.5);transform: translate(15px, 15px) scale(.5);">
                                            <path opacity="1"
                                                d="M30.1,16.1L30.1,16.1c-0.6,0-1-0.5-1-1V1c0-0.6,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1v14.1C31.1,15.7,30.6,16.1,30.1,16.1z">
                                            </path>
                                            <path opacity="0.85"
                                                d="M23.1,18.1L23.1,18.1c-0.5,0.3-1.1,0.1-1.4-0.4L14.5,5.6c-0.3-0.5-0.2-1.1,0.4-1.4l0,0C15.4,3.9,16,4,16.3,4.6l7.2,12.1C23.8,17.2,23.6,17.8,23.1,18.1z">
                                            </path>
                                            <path opacity="0.77"
                                                d="M17.9,23.1L17.9,23.1c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7c-0.5-0.3-0.7-0.9-0.4-1.4l0,0c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7C18,22,18.2,22.7,17.9,23.1z">
                                            </path>
                                            <path opacity="0.69"
                                                d="M16.1,30.1L16.1,30.1c0,0.6-0.5,1-1,1L1,31.2c-0.6,0-1-0.5-1-1l0,0c0-0.6,0.5-1,1-1l14.1-0.1C15.7,29.1,16.1,29.5,16.1,30.1z">
                                            </path>
                                            <path opacity="0.61"
                                                d="M18,36.9L18,36.9c0.3,0.5,0.2,1.1-0.4,1.4L5.5,45.6c-0.5,0.3-1.1,0.2-1.4-0.4l0,0c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3C17.1,36.2,17.7,36.4,18,36.9z">
                                            </path>
                                            <path opacity="0.53"
                                                d="M23.3,42.1L23.3,42.1c0.5,0.3,0.6,0.9,0.4,1.4l-7.3,12.1c-0.3,0.5-0.9,0.6-1.4,0.4l0,0c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1C22.1,41.9,22.8,41.8,23.3,42.1z">
                                            </path>
                                            <path opacity="0.45"
                                                d="M30.1,43.9L30.1,43.9c0.6,0,1,0.5,1,1V59c0,0.6-0.5,1-1,1l0,0c-0.6,0-1-0.5-1-1V44.9C29,44.4,29.5,43.9,30.1,43.9z">
                                            </path>
                                            <path opacity="0.37"
                                                d="M37,41.9L37,41.9c0.5-0.3,1.1-0.2,1.4,0.4l7.2,12.1c0.3,0.5,0.2,1.1-0.4,1.4l0,0c-0.5,0.3-1.1,0.2-1.4-0.4l-7.2-12.1C36.4,42.8,36.6,42.2,37,41.9z">
                                            </path>
                                            <path opacity="0.29"
                                                d="M42.2,36.8L42.2,36.8c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7c0.5,0.3,0.7,0.9,0.4,1.4l0,0c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7C42.1,38,41.9,37.4,42.2,36.8z">
                                            </path>
                                            <path opacity="0.21"
                                                d="M44,29.9L44,29.9c0-0.6,0.5-1,1-1h14.1c0.6,0,1,0.5,1,1l0,0c0,0.6-0.5,1-1,1L45,31C44.4,31,44,30.5,44,29.9z">
                                            </path>
                                            <path opacity="0.13"
                                                d="M42.1,23.1L42.1,23.1c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3c0.5-0.3,1.1-0.2,1.4,0.4l0,0c0.3,0.4,0.1,1.1-0.4,1.3l-12.1,7.3C43.1,23.7,42.4,23.6,42.1,23.1z">
                                            </path>
                                            <path opacity="0.05"
                                                d="M36.9,17.9L36.9,17.9c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1c0.3-0.5,0.9-0.6,1.4-0.4l0,0c0.5,0.3,0.6,0.9,0.4,1.4l-7.4,12.2C38,18.1,37.3,18.2,36.9,17.9z">
                                            </path>
                                        </g>
                                    </svg>


                                </li-icon>
                            </div>

                            <button class="cancel hidden" type="button">
                                <li-icon a11y-text="Remove search text" category="system-icons"
                                    type="close-small"></li-icon>
                            </button>
                        </section>
                        <code id="searching-a11y-text" style="display: none"><!--"Searching"--></code>
                        <code id="finished-searching-a11y-text" style="display: none"><!--"Finished searching"--></code>
                    </section>

                    <button class="visually-hidden visibility-hidden" type="submit"></button>
                </form>
            </section>
            <ol id="secondary-nav-list">




                <li class="nav-item  " data-nav-type="MESSAGING" data-litms-tracking-control-name>
                    <a href="https://www.linkedin.com/messaging/" class="nav-link" id="nav-messaging"
                        aria-label="Messaging">
                        <div class="icon-container">
                            <div class="icon-with-badge-wrapper">
                                <li-icon category="ui" class="icon" a11y-text="Messaging" data-inline-svg="true"
                                    type="nav-messaging-icon">

                                    <!----><!----><!----><!----><!----><!----><!----> <svg
                                        xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" id="messages-medium"
                                        data-supported-dps="24x24" fill="currentColor">
                                        <path
                                            d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z">
                                        </path>
                                    </svg>
                                    <!----><!----><!----><!----><!----><!---->

                                </li-icon>
                                <span id="nav-messaging-badge" class="badge hidden small-inverse"></span>
                                <!---->
                            </div>
                            <!---->
                        </div>
                    </a>
                </li>

            </ol>
        </section>
        <code id="gdprNoticeClearSearch"
            style="display: none"><!--"We use your search history to bring you better search results, ads, and other content. You can clear your search history."--></code>

    </nav>


    <div id="search" class="typeahead-search-container hidden">
        <div class="results-container typeahead-results-container" id="typeahead-results"></div>
    </div>



    <!---->



    <div id="app-container" class>

        <!---->
        <div id="toast-v2-ctr" class=" hidden"></div>

        <div id="verify-email-banner" class="verify-email-container">
        </div>












        <!---->

        <div class="modal-spinner full-page-spinner" data-spinner-state="hidden">
            <div class="spinner-box" data-content="spinner"><svg class="circle-loader" width="32" height="32"
                    version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="11"></circle>
                </svg></div>
        </div>



















        <section class="basic-profile-container basic-profile-update">







            <div class="cover-image " data-action="edit-background-photo">
                <a href="/mwlite/me/add/background" aria-label="Member Background Photo" class="cover-image-container">
                    <img aria-hidden="true" class="member-cover-photo"
                        src="https://media.licdn.com/dms/image/D4D16AQEy3fXN3PmGmA/profile-displaybackgroundimage-shrink_200_800/0/1681055105102?e=1686787200&amp;v=beta&amp;t=9WUIOhaqELsV-AV_Q-Cp_oWYYAB3JAasZ33pQzx7sHM">
                </a>
                <a id="self-profile-settings-gear" class="icon settings-icon" href="/mypreferences/m/?li_theme=light"
                    data-control="settings" data-action="settings" aria-label="Settings">
                    <li-icon category="system-icons" type="settings-small"></li-icon>
                </a>

            </div>

            <div class="member-profile-photo">
                <figure class="member-photo-container">
                    <img role="button" data-delayed-alt="Profile picture"
                        data-delayed-url="https://media.licdn.com/dms/image/C4E03AQHm8X2evymUvw/profile-displayphoto-shrink_400_400/0/1655550171411?e=1686787200&amp;v=beta&amp;t=OAAZYr2dbn8ApB4gcArGEJX_K5WRumbT_phVTvwGBYA"
                        data-href="https://media.licdn.com/dms/image/C4E03AQHm8X2evymUvw/profile-displayphoto-shrink_800_800/0/1655550171411?e=1686787200&amp;v=beta&amp;t=-oiVrvvfAh69J-vmZYMptLrsJbu8i1RO_J_zHgZJgfo">
                    <a class="add-photo-link" href="/mwlite/me/add/photo" aria-label="Edit Photo"
                        data-control="photo-edit">
                        <li-icon class="camera-icon" category="system-icons" type="camera-small"></li-icon>
                    </a>
                </figure>
            </div>








            <div class="badges-action-container">
                <div class="badges">
                    <!---->
                </div>
                <div class="actions">
                    <span class="share-profile-button-wrapper" data-native-share-event="share-intent-native"
                        data-external-share-event="share-intent">

                        <button
                            class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_regular ripple  js-round-btn"
                            type="button">
                            <li-icon class="round-btn__icn" category="system-icons"
                                type="share-linkedin-medium"></li-icon>
                            <span class="visually-hidden">
                                Share Profile
                            </span>
                        </button>

                    </span>
                    <a href="/mwlite/me/edit/intro" aria-label="Edit Intro" class="edit-profile-icon"
                        data-control="top-card-edit">
                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                    </a>
                </div>
            </div>


















            <code id="shareProfileDescription"
                style="display: none"><!--"Check out Liudmila Shurupova’s profile on LinkedIn"--></code>
            <code id="shareProfileTitle" style="display: none"><!--"LinkedIn: Profile of Liudmila Shurupova"--></code>
            <code id="profileUrl" style="display: none"><!--"https://www.linkedin.com/in/liudmilashurupova"--></code>

            <dl class="member-description" tabindex="0">
                <dt class="member-name extra-extra-large-semibold">
                    <span dir="ltr">
                        Liudmila Shurupova
                    </span>
                    <!----> <span class="badges">
                        <!----> </span>
                </dt>
                <dd class="medium" dir="ltr">Operations manager / Project manager</dd>
                <dd class="medium-light">
                    <span class="member-education" dir="ltr">Московский Государственный Университет им. М.В. Ломоносова
                        (МГУ)</span>
                    <span class="dot-separator" aria-hidden="true"></span>
                    <span class="member-current-company" dir="ltr">
                        ZioNet
                    </span>
                </dd>

                <dd class="medium-light">
                    Haifa, Haifa District, Israel
                    <span class="dot-separator" aria-hidden="true"></span>
                    <span class="member-connection-info">
                        <a class="self-connections"
                            href="https://www.linkedin.com/mynetwork/invite-connect/connections/">500+ connections</a>
                    </span>
                </dd>
            </dl>


            <!---->





            <section class="open-to">
                <!---->





                <div class="opted-in">
                    <a href="/in/liudmilashurupova/opportunities/job-opportunities/details" class="opt-text false"
                        data-control="cta_open_to">
                        <h3 class="medium-semibold">Open to job opportunities</h3>
                        <p class="open-to-roles medium">Project Manager, Operations Manager and Manager roles</p>
                        <span class="medium-semibold view-job-pref">See all details</span>
                    </a>
                    <a class="edit-job-pref" href="/me/opportunities/job-opportunities/edit"
                        aria-label="Edit job preferences" data-control="edit_open_to">
                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                    </a>
                </div>
                <div class="visibility opted-self medium">
                    <li-icon class="eyeball-icon" category="system-icons" type="visibility-small"></li-icon>
                    <span class="visually-hidden">Visible to</span>
                    <span>Only recruiters</span>
                </div>

            </section>


            <!---->
        </section>


        <div id="verify-email-banner-v2" class="verify-email-container profile-email-verification-card hidden"></div>

        <code id="account-center-notification-link"
            style="display: none"><!--"/mwlite/accountcenter/getWidgets?pageContext=profile"--></code>
        <div id="account-center-notification" class="profile-account-center"></div>







        <section id="about-section">

            <h4 class="list-heading large ">About</h4>
            <!---->
            <span data-action="edit-btn" data-control="edit-summary">

                <a href="/me/edit/about" class="round-link-btn component-theme medium edit-icon"
                    aria-label="Edit about">
                    <div class="round-link-btn__wrapper btn-component tertiary  ">
                        <li-icon class="round-link-btn__icn" category="system-icons" type="edit-medium"></li-icon>
                    </div>
                </a>

            </span>
            <div class="summary-container">
                <div class="summary-text truncated-summary ">




                    <div class="description truncated medium" tabindex="0" role="text" dir="ltr">With over 10 years of
                        management experience and a strong blend of strategic thinking, analytical skills, and
                        leadership abilities, I am a highly-organized and results-driven professional who can thrive in
                        diverse environments and cultures. As an Area Manager at Uniqlo, I was responsible for
                        overseeing the operations and performance of multiple stores in my region, working to achieve
                        key performance indicators (KPIs) and supporting and developing store managers. I also initiated
                        and implemented several cross-department projects, including a project to optimize the vacation
                        planning of all store employees, which helped to increase store efficiency and reduce cost per
                        man-hour in both peak and low sales months. My extensive experience in the retail industry has
                        given me a solid understanding of sales, customer service, and store operations. In fast-paced
                        environments, I have learned to make swift decisions under pressure and effectively delegate
                        tasks to deliver results by building a smooth operating system for daily operations.</div>
                    <button class="text-expand-collapse-button medium-light-semibold body-small-light-bold"
                        aria-expanded="false" aria-hidden="true">
                        <span class="see-more">
                            …See more
                            <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                type="chevron-down-small"></li-icon>
                        </span>
                        <span class="see-less">
                            See less
                            <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                type="chevron-up-small"></li-icon>
                        </span>
                    </button>

                </div>
            </div>
        </section>


        <!---->














        <section id="featured-section">

            <h4 class="list-heading large ">Featured</h4>
            <!---->
            <code id="isSelfProfile" style="display: none"><!--true--></code>
            <div class="body-small-light add-featured-text">Add external documents, photos and links.</div>

            <button
                class="rect-btn component-theme rect-btn_left rect-btn_tertiary  rect-btn_small ripple add-media-button action-cta  js-rect-btn"
                type="button">
                <span class="rect-btn__cntnt-wrapper">
                    <li-icon class="rect-btn__icn" category="system-icons" type="add-small"></li-icon>
                    <span class="rect-btn__label" aria-hidden="true">
                        Add featured
                    </span>
                    <span class="visually-hidden">
                        Add featured
                    </span>
                </span>
            </button>

        </section>











        <section class="bottom-sheet  hidden" id="bottom-sheet" aria-hidden="true" role="dialog">
            <div class="overlay" data-action="close-bottom-sheet"></div>
            <div class="container">

                <header class="header-section">
                    <span data-action="close-bottom-sheet">


                        <button
                            class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_regular ripple close-button js-round-btn"
                            type="button">
                            <li-icon class="round-btn__icn" category="ui" type="cancel-large"></li-icon>
                            <span class="visually-hidden">
                                Close
                            </span>
                        </button>

                    </span>
                    <h3 class="title heading-large" id="bottom-sheet-title">

                        Select a file type

                    </h3>
                </header>

                <div class="content">

                    <ul class="upload-options-list">
                        <li class="upload-option" data-action="add-featured-photo">

                            <button
                                class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_regular ripple upload-cta  js-rect-btn"
                                type="button">
                                <span class="rect-btn__cntnt-wrapper">
                                    <li-icon class="rect-btn__icn" category="system-icons"
                                        type="image-medium"></li-icon>
                                    <span class="rect-btn__label" aria-hidden="true">
                                        Add a photo
                                    </span>
                                    <span class="visually-hidden">
                                        Add a photo
                                    </span>
                                </span>
                            </button>

                        </li>
                        <li class="upload-option" data-action="add-featured-document">

                            <button
                                class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_regular ripple upload-cta  js-rect-btn"
                                type="button">
                                <span class="rect-btn__cntnt-wrapper">
                                    <li-icon class="rect-btn__icn" category="system-icons"
                                        type="document-medium"></li-icon>
                                    <span class="rect-btn__label" aria-hidden="true">
                                        Upload a document
                                    </span>
                                    <span class="visually-hidden">
                                        Upload a document
                                    </span>
                                </span>
                            </button>

                        </li>
                        <li class="upload-option" data-action="add-featured-link">

                            <button
                                class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_regular ripple upload-cta  js-rect-btn"
                                type="button">
                                <span class="rect-btn__cntnt-wrapper">
                                    <li-icon class="rect-btn__icn" category="system-icons" type="link-medium"></li-icon>
                                    <span class="rect-btn__label" aria-hidden="true">
                                        Add a link
                                    </span>
                                    <span class="visually-hidden">
                                        Add a link
                                    </span>
                                </span>
                            </button>

                        </li>
                    </ul>




                    <div class="input-container  image-input hidden" data-id="image-input"
                        data-label-text="image-input">
                        <input class="body-medium  " aria-labelledby="image-input-label" id="image-input"
                            accept="image/jpeg, image/jpg, image/png, image/gif" type="file">
                        <!----> <button class="icon-wrapper right clear-btn" aria-label="Click to clear input"
                            type="button">
                            <li-icon category="system-icons" class="icon" type="clear-medium"></li-icon>
                        </button>
                        <div class="icon-wrapper right error-icon">
                            <li-icon category="system-icons" class="icon" type="signal-error-medium"></li-icon>
                        </div>
                        <label class="body-medium-light" id="image-input-label" aria-hidden="true"
                            for="image-input">image-input</label>
                        <div class="hints-container">
                            <div class="helper-text body-xsmall-light"></div>
                            <div class="error-text body-xsmall-light"></div>
                        </div>
                    </div>





                    <div class="input-container  document-input hidden" data-id="document-input"
                        data-label-text="document-input">
                        <input class="body-medium  " aria-labelledby="document-input-label" id="document-input"
                            accept=".doc,.docx,.pdf,.ppt,.pptx,.pps,.ppsx" type="file">
                        <!----> <button class="icon-wrapper right clear-btn" aria-label="Click to clear input"
                            type="button">
                            <li-icon category="system-icons" class="icon" type="clear-medium"></li-icon>
                        </button>
                        <div class="icon-wrapper right error-icon">
                            <li-icon category="system-icons" class="icon" type="signal-error-medium"></li-icon>
                        </div>
                        <label class="body-medium-light" id="document-input-label" aria-hidden="true"
                            for="document-input">document-input</label>
                        <div class="hints-container">
                            <div class="helper-text body-xsmall-light"></div>
                            <div class="error-text body-xsmall-light"></div>
                        </div>
                    </div>


                </div>
                <div class="footer">

                </div>
            </div>
        </section>

        <template id="upload-failure-toast-template">




            <div class="toast-msg flex-entity-lockup">
                <li-icon category="system-icons" class="toast-icon failure" type="signal-error-medium"></li-icon>
                <p class="toast-txt">
                    There was a problem uploading your file, please try again.
                    <a class="cta-link" href="/help/linkedin/answer/34327">Learn more</a>
                </p>


                <button
                    class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                    type="button">
                    <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                    <span class="visually-hidden">
                        Click to dismiss the toast
                    </span>
                </button>



            </div>

        </template>









        <div id="add-link-modal" class="hidden">





            <template id="generic-typeahead-result-template">
                <ol class="typeahead-results-list" role="listbox" aria-multiselectable="false">


                    <li class="typeahead-item large simple-item" role="option" tabindex="0">



                    </li>



                </ol>
            </template>

            <template id="toast-error-template">




                <div class="toast-msg flex-entity-lockup">
                    <li-icon category="system-icons" class="toast-icon failure" type="signal-error-medium"></li-icon>
                    <p class="toast-txt">
                        <!---->
                        <!---->
                    </p>


                    <button
                        class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                        type="button">
                        <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                        <span class="visually-hidden">
                            Click to dismiss the toast
                        </span>
                    </button>



                </div>

            </template>





            <header class="full-page-header ">
                <div id="header-back">
                    <button class="back-button">
                        <li-icon category="system-icons" a11y-text="back" type="arrow-left-medium"></li-icon>
                    </button>
                </div>
                <div class="header-content">

                    <h1 class="edit-profile-title heading-large">Add a link</h1>

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_tertiary rect-btn_disabled rect-btn_small  edit-profile-save   js-rect-btn"
                        aria-disabled="true" disabled="disabled" type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Add
                            </span>
                            <span class="visually-hidden">
                                Add link
                            </span>
                        </span>
                    </button>


                    <!---->
                    <div class="profile-update-progress-indicator hidden">
                        <span class="spinner">
                            <li-icon category="ui" class="blue" data-inline-svg="true" type="loader-large">

                                <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                <svg id="loader" x="50%" y="50%" width="60px" height="60px" viewbox="0 0 60 60">
                                    <g class="large-icon" style="fill: currentColor;">
                                        <path opacity="1"
                                            d="M30.1,16.1L30.1,16.1c-0.6,0-1-0.5-1-1V1c0-0.6,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1v14.1C31.1,15.7,30.6,16.1,30.1,16.1z">
                                        </path>
                                        <path opacity="0.85"
                                            d="M23.1,18.1L23.1,18.1c-0.5,0.3-1.1,0.1-1.4-0.4L14.5,5.6c-0.3-0.5-0.2-1.1,0.4-1.4l0,0C15.4,3.9,16,4,16.3,4.6l7.2,12.1C23.8,17.2,23.6,17.8,23.1,18.1z">
                                        </path>
                                        <path opacity="0.77"
                                            d="M17.9,23.1L17.9,23.1c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7c-0.5-0.3-0.7-0.9-0.4-1.4l0,0c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7C18,22,18.2,22.7,17.9,23.1z">
                                        </path>
                                        <path opacity="0.69"
                                            d="M16.1,30.1L16.1,30.1c0,0.6-0.5,1-1,1L1,31.2c-0.6,0-1-0.5-1-1l0,0c0-0.6,0.5-1,1-1l14.1-0.1C15.7,29.1,16.1,29.5,16.1,30.1z">
                                        </path>
                                        <path opacity="0.61"
                                            d="M18,36.9L18,36.9c0.3,0.5,0.2,1.1-0.4,1.4L5.5,45.6c-0.5,0.3-1.1,0.2-1.4-0.4l0,0c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3C17.1,36.2,17.7,36.4,18,36.9z">
                                        </path>
                                        <path opacity="0.53"
                                            d="M23.3,42.1L23.3,42.1c0.5,0.3,0.6,0.9,0.4,1.4l-7.3,12.1c-0.3,0.5-0.9,0.6-1.4,0.4l0,0c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1C22.1,41.9,22.8,41.8,23.3,42.1z">
                                        </path>
                                        <path opacity="0.45"
                                            d="M30.1,43.9L30.1,43.9c0.6,0,1,0.5,1,1V59c0,0.6-0.5,1-1,1l0,0c-0.6,0-1-0.5-1-1V44.9C29,44.4,29.5,43.9,30.1,43.9z">
                                        </path>
                                        <path opacity="0.37"
                                            d="M37,41.9L37,41.9c0.5-0.3,1.1-0.2,1.4,0.4l7.2,12.1c0.3,0.5,0.2,1.1-0.4,1.4l0,0c-0.5,0.3-1.1,0.2-1.4-0.4l-7.2-12.1C36.4,42.8,36.6,42.2,37,41.9z">
                                        </path>
                                        <path opacity="0.29"
                                            d="M42.2,36.8L42.2,36.8c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7c0.5,0.3,0.7,0.9,0.4,1.4l0,0c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7C42.1,38,41.9,37.4,42.2,36.8z">
                                        </path>
                                        <path opacity="0.21 "
                                            d="M44,29.9L44,29.9c0-0.6,0.5-1,1-1h14.1c0.6,0,1,0.5,1,1l0,0c0,0.6-0.5,1-1,1L45,31C44.4,31,44,30.5,44,29.9z">
                                        </path>
                                        <path opacity="0.13"
                                            d="M42.1,23.1L42.1,23.1c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3c0.5-0.3,1.1-0.2,1.4,0.4l0,0c0.3,0.4,0.1,1.1-0.4,1.3l-12.1,7.3C43.1,23.7,42.4,23.6,42.1,23.1z">
                                        </path>
                                        <path opacity="0.05"
                                            d="M36.9,17.9L36.9,17.9c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1c0.3-0.5,0.9-0.6,1.4-0.4l0,0c0.5,0.3,0.6,0.9,0.4,1.4l-7.4,12.2C38,18.1,37.3,18.2,36.9,17.9z">
                                        </path>
                                    </g>
                                </svg>
                                <!---->

                            </li-icon>
                        </span>
                    </div>

                </div>
                <div id="header-action">

                </div>
            </header>




            <div class="modal-spinner full-page-spinner" data-spinner-state="hidden">
                <div class="spinner-box" data-content="spinner"><svg class="circle-loader" width="32" height="32"
                        version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="11"></circle>
                    </svg></div>
            </div>


            <form id="add-link-form" novalidate>




                <div class="input-container  body-small" data-id="link" data-label-text="Link">
                    <input class="body-medium  " aria-labelledby="link-label" id="link" name="link" required="true"
                        type="text">
                    <!----> <button class="icon-wrapper right clear-btn" aria-label="Click to clear input"
                        type="button">
                        <li-icon category="system-icons" class="icon" type="clear-medium"></li-icon>
                    </button>
                    <div class="icon-wrapper right error-icon">
                        <li-icon category="system-icons" class="icon" type="signal-error-medium"></li-icon>
                    </div>
                    <label class="body-medium-light" id="link-label" aria-hidden="true" for="link">Link</label>
                    <div class="hints-container">
                        <div class="helper-text body-xsmall-light"></div>
                        <div class="error-text body-xsmall-light" id="error-link">Url is incorrectly formatted.</div>
                    </div>
                </div>

                <span class="helper-text body-xsmall-light">Paste or type a link to a file or video</span>
            </form>
        </div>









        <div class="featured-modal hidden" id="add-media-modal">
            <code id="formFieldPrefix" style="display: none"><!--"addmedia"--></code>
            <div class="featured-content-wrapper">





                <template id="generic-typeahead-result-template">
                    <ol class="typeahead-results-list" role="listbox" aria-multiselectable="false">


                        <li class="typeahead-item large simple-item" role="option" tabindex="0">



                        </li>



                    </ol>
                </template>

                <template id="toast-error-template">




                    <div class="toast-msg flex-entity-lockup">
                        <li-icon category="system-icons" class="toast-icon failure"
                            type="signal-error-medium"></li-icon>
                        <p class="toast-txt">
                            <!---->
                            <!---->
                        </p>


                        <button
                            class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                            type="button">
                            <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                            <span class="visually-hidden">
                                Click to dismiss the toast
                            </span>
                        </button>



                    </div>

                </template>





                <header class="full-page-header featured-modal-header">
                    <div id="header-back">
                        <button class="back-button">
                            <li-icon category="system-icons" a11y-text="back" type="arrow-left-medium"></li-icon>
                        </button>
                    </div>
                    <div class="header-content">

                        <h1 class="edit-profile-title heading-large">Add media</h1>

                        <button
                            class="rect-btn component-theme rect-btn_left rect-btn_tertiary rect-btn_disabled rect-btn_small  edit-profile-save   js-rect-btn"
                            aria-disabled="true" disabled="disabled" type="button">
                            <span class="rect-btn__cntnt-wrapper">
                                <!----> <span class="rect-btn__label" aria-hidden="true">
                                    Save
                                </span>
                                <span class="visually-hidden">
                                    Save media
                                </span>
                            </span>
                        </button>


                        <!---->
                        <div class="profile-update-progress-indicator hidden">
                            <span class="spinner">
                                <li-icon category="ui" class="blue" data-inline-svg="true" type="loader-large">

                                    <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                    <svg id="loader" x="50%" y="50%" width="60px" height="60px" viewbox="0 0 60 60">
                                        <g class="large-icon" style="fill: currentColor;">
                                            <path opacity="1"
                                                d="M30.1,16.1L30.1,16.1c-0.6,0-1-0.5-1-1V1c0-0.6,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1v14.1C31.1,15.7,30.6,16.1,30.1,16.1z">
                                            </path>
                                            <path opacity="0.85"
                                                d="M23.1,18.1L23.1,18.1c-0.5,0.3-1.1,0.1-1.4-0.4L14.5,5.6c-0.3-0.5-0.2-1.1,0.4-1.4l0,0C15.4,3.9,16,4,16.3,4.6l7.2,12.1C23.8,17.2,23.6,17.8,23.1,18.1z">
                                            </path>
                                            <path opacity="0.77"
                                                d="M17.9,23.1L17.9,23.1c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7c-0.5-0.3-0.7-0.9-0.4-1.4l0,0c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7C18,22,18.2,22.7,17.9,23.1z">
                                            </path>
                                            <path opacity="0.69"
                                                d="M16.1,30.1L16.1,30.1c0,0.6-0.5,1-1,1L1,31.2c-0.6,0-1-0.5-1-1l0,0c0-0.6,0.5-1,1-1l14.1-0.1C15.7,29.1,16.1,29.5,16.1,30.1z">
                                            </path>
                                            <path opacity="0.61"
                                                d="M18,36.9L18,36.9c0.3,0.5,0.2,1.1-0.4,1.4L5.5,45.6c-0.5,0.3-1.1,0.2-1.4-0.4l0,0c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3C17.1,36.2,17.7,36.4,18,36.9z">
                                            </path>
                                            <path opacity="0.53"
                                                d="M23.3,42.1L23.3,42.1c0.5,0.3,0.6,0.9,0.4,1.4l-7.3,12.1c-0.3,0.5-0.9,0.6-1.4,0.4l0,0c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1C22.1,41.9,22.8,41.8,23.3,42.1z">
                                            </path>
                                            <path opacity="0.45"
                                                d="M30.1,43.9L30.1,43.9c0.6,0,1,0.5,1,1V59c0,0.6-0.5,1-1,1l0,0c-0.6,0-1-0.5-1-1V44.9C29,44.4,29.5,43.9,30.1,43.9z">
                                            </path>
                                            <path opacity="0.37"
                                                d="M37,41.9L37,41.9c0.5-0.3,1.1-0.2,1.4,0.4l7.2,12.1c0.3,0.5,0.2,1.1-0.4,1.4l0,0c-0.5,0.3-1.1,0.2-1.4-0.4l-7.2-12.1C36.4,42.8,36.6,42.2,37,41.9z">
                                            </path>
                                            <path opacity="0.29"
                                                d="M42.2,36.8L42.2,36.8c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7c0.5,0.3,0.7,0.9,0.4,1.4l0,0c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7C42.1,38,41.9,37.4,42.2,36.8z">
                                            </path>
                                            <path opacity="0.21 "
                                                d="M44,29.9L44,29.9c0-0.6,0.5-1,1-1h14.1c0.6,0,1,0.5,1,1l0,0c0,0.6-0.5,1-1,1L45,31C44.4,31,44,30.5,44,29.9z">
                                            </path>
                                            <path opacity="0.13"
                                                d="M42.1,23.1L42.1,23.1c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3c0.5-0.3,1.1-0.2,1.4,0.4l0,0c0.3,0.4,0.1,1.1-0.4,1.3l-12.1,7.3C43.1,23.7,42.4,23.6,42.1,23.1z">
                                            </path>
                                            <path opacity="0.05"
                                                d="M36.9,17.9L36.9,17.9c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1c0.3-0.5,0.9-0.6,1.4-0.4l0,0c0.5,0.3,0.6,0.9,0.4,1.4l-7.4,12.2C38,18.1,37.3,18.2,36.9,17.9z">
                                            </path>
                                        </g>
                                    </svg>
                                    <!---->

                                </li-icon>
                            </span>
                        </div>

                    </div>
                    <div id="header-action">

                    </div>
                </header>




                <div class="modal-spinner full-page-spinner" data-spinner-state="hidden">
                    <div class="spinner-box" data-content="spinner"><svg class="circle-loader" width="32" height="32"
                            version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="11"></circle>
                        </svg></div>
                </div>



                <div class="featured-modal-content">
                    <div class="preview">

                        <div class="image-loader hidden" role="presentation">
                            <li-icon category="ui" class="blue" data-inline-svg="true" type="loader-small">

                                <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                <svg id="loader" x="50%" y="50%" width="60px" height="60px" viewbox="0 0 60 60">
                                    <g class="small-icon"
                                        style="fill-opacity: 1;-webkit-transform: translate(15px, 15px) scale(.5);transform: translate(15px, 15px) scale(.5);">
                                        <path opacity="1"
                                            d="M30.1,16.1L30.1,16.1c-0.6,0-1-0.5-1-1V1c0-0.6,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1v14.1C31.1,15.7,30.6,16.1,30.1,16.1z">
                                        </path>
                                        <path opacity="0.85"
                                            d="M23.1,18.1L23.1,18.1c-0.5,0.3-1.1,0.1-1.4-0.4L14.5,5.6c-0.3-0.5-0.2-1.1,0.4-1.4l0,0C15.4,3.9,16,4,16.3,4.6l7.2,12.1C23.8,17.2,23.6,17.8,23.1,18.1z">
                                        </path>
                                        <path opacity="0.77"
                                            d="M17.9,23.1L17.9,23.1c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7c-0.5-0.3-0.7-0.9-0.4-1.4l0,0c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7C18,22,18.2,22.7,17.9,23.1z">
                                        </path>
                                        <path opacity="0.69"
                                            d="M16.1,30.1L16.1,30.1c0,0.6-0.5,1-1,1L1,31.2c-0.6,0-1-0.5-1-1l0,0c0-0.6,0.5-1,1-1l14.1-0.1C15.7,29.1,16.1,29.5,16.1,30.1z">
                                        </path>
                                        <path opacity="0.61"
                                            d="M18,36.9L18,36.9c0.3,0.5,0.2,1.1-0.4,1.4L5.5,45.6c-0.5,0.3-1.1,0.2-1.4-0.4l0,0c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3C17.1,36.2,17.7,36.4,18,36.9z">
                                        </path>
                                        <path opacity="0.53"
                                            d="M23.3,42.1L23.3,42.1c0.5,0.3,0.6,0.9,0.4,1.4l-7.3,12.1c-0.3,0.5-0.9,0.6-1.4,0.4l0,0c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1C22.1,41.9,22.8,41.8,23.3,42.1z">
                                        </path>
                                        <path opacity="0.45"
                                            d="M30.1,43.9L30.1,43.9c0.6,0,1,0.5,1,1V59c0,0.6-0.5,1-1,1l0,0c-0.6,0-1-0.5-1-1V44.9C29,44.4,29.5,43.9,30.1,43.9z">
                                        </path>
                                        <path opacity="0.37"
                                            d="M37,41.9L37,41.9c0.5-0.3,1.1-0.2,1.4,0.4l7.2,12.1c0.3,0.5,0.2,1.1-0.4,1.4l0,0c-0.5,0.3-1.1,0.2-1.4-0.4l-7.2-12.1C36.4,42.8,36.6,42.2,37,41.9z">
                                        </path>
                                        <path opacity="0.29"
                                            d="M42.2,36.8L42.2,36.8c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7c0.5,0.3,0.7,0.9,0.4,1.4l0,0c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7C42.1,38,41.9,37.4,42.2,36.8z">
                                        </path>
                                        <path opacity="0.21"
                                            d="M44,29.9L44,29.9c0-0.6,0.5-1,1-1h14.1c0.6,0,1,0.5,1,1l0,0c0,0.6-0.5,1-1,1L45,31C44.4,31,44,30.5,44,29.9z">
                                        </path>
                                        <path opacity="0.13"
                                            d="M42.1,23.1L42.1,23.1c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3c0.5-0.3,1.1-0.2,1.4,0.4l0,0c0.3,0.4,0.1,1.1-0.4,1.3l-12.1,7.3C43.1,23.7,42.4,23.6,42.1,23.1z">
                                        </path>
                                        <path opacity="0.05"
                                            d="M36.9,17.9L36.9,17.9c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1c0.3-0.5,0.9-0.6,1.4-0.4l0,0c0.5,0.3,0.6,0.9,0.4,1.4l-7.4,12.2C38,18.1,37.3,18.2,36.9,17.9z">
                                        </path>
                                    </g>
                                </svg>


                            </li-icon>
                        </div>

                        <img class="preview-image image-center-cropped">
                        <div class="fallback-image-container hidden">
                            <img class="fallback-image"
                                data-delayed-url="https://static.licdn.com/sc/h/2jgp12jkw69qzxpu3r0rvbw01"
                                light-theme-url="https://static.licdn.com/sc/h/2jgp12jkw69qzxpu3r0rvbw01"
                                dark-theme-url="https://static.licdn.com/sc/h/b2731mwxbafnh7cdovvncgau6"
                                alt="Media image">
                        </div>
                    </div>

                    <form id="featured-form" novalidate>




                        <div class="input-container  body-small" data-id="addmediaTitle" data-label-text="Title">
                            <input class="body-medium  " aria-labelledby="addmediaTitle-label" id="addmediaTitle"
                                name="addmediaTitle" required="true" type="text">
                            <!----> <button class="icon-wrapper right clear-btn" aria-label="Click to clear input"
                                type="button">
                                <li-icon category="system-icons" class="icon" type="clear-medium"></li-icon>
                            </button>
                            <div class="icon-wrapper right error-icon">
                                <li-icon category="system-icons" class="icon" type="signal-error-medium"></li-icon>
                            </div>
                            <label class="body-medium-light" id="addmediaTitle-label" aria-hidden="true"
                                for="addmediaTitle">Title</label>
                            <div class="hints-container">
                                <div class="helper-text body-xsmall-light"></div>
                                <div class="error-text body-xsmall-light" id="error-addmediaTitle"></div>
                            </div>
                        </div>



                        <div class="text-input-container " data-id="addmediaDescription"
                            data-label-text="Description (optional)">
                            <textarea rows="5" name="addmediaDescription" class="body-small "
                                id="addmediaDescription"></textarea>
                            <label class="text-area-label" for="addmediaDescription">Description (optional)</label>

                            <div class="flex-break"></div>

                            <div class="hints-container">
                                <!----> <span id="error-addmediaDescription" class="error-text body-xsmall"></span>
                                <!---->
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <!---->
            <div id="featured-error-messages" class="hidden" ..attributes></div>
            <div id="toast-v2-ctr" class="featured-modal-toast remove-bottom-property hidden"></div>
        </div>

























        <div id="unsaved-changes-modal" class="dialog-modal overlay hidden" role="dialog"
            aria-describedby="unsaved-changes-modal-label" data-primary-action-label="Discard"
            data-secondary-action-label="Cancel">
            <div class="dialog-modal-container medium">
                <!---->
                <div class="dialog-content body-medium" id="unsaved-changes-modal-label">
                    You have unsaved changes. Do you want to discard them?
                </div>
                <div class="dialog-actions ">

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple secondary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Cancel
                            </span>
                            <span class="visually-hidden">
                                Cancel
                            </span>
                        </span>
                    </button>


                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple primary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Discard
                            </span>
                            <span class="visually-hidden">
                                Discard
                            </span>
                        </span>
                    </button>

                </div>
            </div>
        </div>



        <template id="toast-error-template">




            <div class="toast-msg flex-entity-lockup">
                <li-icon category="system-icons" class="toast-icon failure" type="signal-error-medium"></li-icon>
                <p class="toast-txt">
                    <!---->
                    <!---->
                </p>


                <button
                    class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                    type="button">
                    <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                    <span class="visually-hidden">
                        Click to dismiss the toast
                    </span>
                </button>



            </div>

        </template>









        <section class="profile-insight">
            <em class="medium-light">Private to you</em>

            <div class="insight-blocks-wrapper">
                <a class="section partition-border" href="/mwlite/me/profile-views" data-control="WVMP">
                    <div class="count extra-large-semibold">
                        68
                    </div>
                    <div class="small-dark">
                        Who viewed your profile
                    </div>
                </a>
                <a class="section partition-border hidden" href="/mwlite/me/profile-views">
                    <div class="count extra-large-semibold">
                        0
                    </div>
                    <div class="small-dark">
                        Article views
                    </div>
                </a>

                <a class="section" href="/mwlite/me/search-appearances/" data-control="search-appearences">
                    <div class="count extra-large-semibold">
                        21
                    </div>
                    <div class="small-dark">
                        Search appearances
                    </div>
                </a>
            </div>
        </section>


        <!---->





















        <section class="activity-section">
            <h4 id="activity-header" class="list-heading large">
                Activity
            </h4>
            <div class="small-light">
                979 followers
            </div>
            <ol>
                <li class="activity  ">


                    <a class="activity-container interstitial-entity-content"
                        href="https://www.linkedin.com/feed/update/activity:7044690898055536640">
                        <figure aria-hidden="true">
                            <img data-delayed-url="https://media.licdn.com/dms/image/C561FAQFq22cZun87Vg/feedshare-document-cover-images_480/0/1678693548352?e=1681999200&amp;v=beta&amp;t=2dgOjup2h3tV1RwVHJAvHZkESz9EeZfD8um9koVvO9E"
                                id="post-image" data-delayed-alt class="post-image">
                            <!---->
                        </figure>
                        <dl>
                            <dt class="medium-semibold" dir="ltr">
                                Attention!

                                I wanted to give a shoutout to our intern, Boris Vasilev, who has been working with us
                                in Tropx for the past three months as a software developer. Boris Vasilev has been an
                                integral part of our team, developing a python database app and contributing to other
                                projects as well.

                                He has shown a great aptitude for problem-solving, and he consistently produces
                                high-quality work. He demonstrated the ability to work effectively in a team
                                environment, collaborating with all other team members, to ensure that projects are
                                completed on time.

                                Boris Vasilev will be finishing his internship with us soon, and I wanted to recommend
                                him to any companies that are looking for talented software developers (Java or Python).
                                He would make a valuable addition to any team, and he has our highest recommendation.

                                Please feel free to reach out to Boris Vasilev directly if you have any opportunities
                                that might be a good fit. Here is his CV with all contact data.

                                Thank you!
                            </dt>
                            <dd class="small">
                                You liked this
                            </dd>
                        </dl>
                    </a>


                </li>
            </ol>
        </section>
        <div class="see-more-activity medium-semibold">
            <a id="see-more-activity-link" href="https://www.linkedin.com/in/liudmilashurupova/recent-activity/"
                data-control="see-all-activity" aria-label="See all activity">See all</a>
        </div>


        <div class="profile-overview-container">











            <section class="experience-container list-container collapsable-list-container false false collapsed"
                aria-expanded="true">

                <h4 class="list-heading large ">Experience</h4>
                <a class="add-link has-items" href="/mwlite/me/add/position" data-control="add-experience">
                    <li-icon class="add-btn" category="system-icons" type="add-small"></li-icon>
                    <span class="add-link-text medium-semibold">Add experience</span>
                </a>


                <!---->
                <ol>
                    <li class="entity-lockup profile-entity-lockup grouped ">






                        <!---->
                        <div class="experience-roles-container collapsable-list-container">
                            <ul>
                                <li class="entity-lockup profile-entity-lockup">




                                    <a class="detail-section editable" href="/mwlite/company/zion-net">
                                        <figure aria-hidden="true">

                                            <img data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQGGJNZp6a81BA/company-logo_100_100/0/1649711575725?e=1689206400&amp;v=beta&amp;t=wnpKqVHjJlIMvHtpe_nxmLEG9tAtbQqRgIXN6dr_sm0"
                                                width="100" height="100">
                                        </figure>

                                        <dl>
                                            <dt class="large-semibold list-item-heading">
                                                <span dir="ltr">Full Stack Engineer</span>
                                            </dt>

                                            <dd class="medium entity-name">
                                                <span dir="ltr">ZioNet</span>
                                            </dd>

                                            <dd class="medium time-period">



                                                <span class="medium">Feb 2023 - </span>
                                                <span class="medium">Present</span>


                                                <span class="dot-separator" aria-hidden="true"></span>
                                                <span>3 mos</span>
                                            </dd>

                                            <dd class="small-light entity-location">
                                                <span dir="ltr">
                                                    Israel
                                                </span>
                                            </dd>

                                            <dd class="medium-light entity-description truncated-summary"
                                                data-truncated-control="expand-experience-description">




                                                <div class="description complete-text medium" tabindex="0" dir="ltr">
                                                    Developed full stack application for marketing purposes.</div>

                                            </dd>
                                        </dl>
                                    </a>

                                    <a class="edit-section" href="/mwlite/me/edit/position/2154848856"
                                        aria-label="Edit experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                </li>
                            </ul>
                        </div>

                    </li>
                    <li class="entity-lockup profile-entity-lockup grouped ">






                        <a href="/mwlite/company/uniqlo" class="timeline-head">
                            <figure>

                                <img data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQGTat7_ZKWhLQ/company-logo_100_100/0/1519862376576?e=1689206400&amp;v=beta&amp;t=4R9izmfPSxVu5cBIL-C78t3HMjuYtZvaqZ2Th6_R_kI"
                                    width="100" height="100">
                            </figure>

                            <div class="postion-detail">
                                <div class="large-semibold list-item-heading">
                                    <span dir="ltr">UNIQLO</span>
                                </div>
                                <div class="medium entity-name"> 7 yrs 2 mos</div>
                            </div>
                        </a>

                        <div class="experience-roles-container collapsable-list-container">
                            <ul>
                                <li class="role-container editable">
                                    <a class="edit-section" href="/mwlite/me/edit/position/1985837823"
                                        aria-label="Edit Experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                    <div class="timeline path">
                                        <div class="landmark-container">
                                            <div class="landmark"></div>
                                        </div>
                                    </div>

                                    <dl>
                                        <dt class="medium-semibold">
                                            <span dir="ltr">Area Sales Manager / Team Leader</span>
                                        </dt>

                                        <dd class="medium time-period">



                                            <span class="medium">Feb 2022 - </span>
                                            <span class="medium">Sep 2022</span>

                                            <span class="dot-separator" aria-hidden="true"></span>
                                            <span>8 mos</span>
                                        </dd>

                                        <!---->
                                        <dd class="medium entity-description truncated-summary"
                                            data-truncated-control="expand-experience-description">




                                            <div class="description truncated medium" tabindex="0" role="text"
                                                dir="ltr">Managed the biggest store in Russia, achieved sales 110% vs
                                                tgt.
                                                Achieved business profit 180%+ vs target, 300%+ vs last year.
                                                Resolved fundamental store issue: improved turnover ratio from 42% up to
                                                4%.
                                                Reinforced sales cost strategy, achieved 80% personnal cost vs last
                                                year.
                                                Supervised 2 Senior Store Managers and 200+ employees.</div>
                                            <button class="text-expand-collapse-button medium-light-semibold "
                                                aria-expanded="false" aria-hidden="true">
                                                <span class="see-more">
                                                    …more
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-down-small"></li-icon>
                                                </span>
                                                <span class="see-less">
                                                    See less
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-up-small"></li-icon>
                                                </span>
                                            </button>

                                        </dd>
                                    </dl>
                                </li>
                                <li class="role-container editable">
                                    <a class="edit-section" href="/mwlite/me/edit/position/1829718890"
                                        aria-label="Edit Experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                    <div class="timeline path">
                                        <div class="landmark-container">
                                            <div class="landmark"></div>
                                        </div>
                                    </div>

                                    <dl>
                                        <dt class="medium-semibold">
                                            <span dir="ltr">Region Sales Operations Manager</span>
                                        </dt>

                                        <dd class="medium time-period">



                                            <span class="medium">Aug 2019 - </span>
                                            <span class="medium">Jan 2022</span>

                                            <span class="dot-separator" aria-hidden="true"></span>
                                            <span>2 yrs 6 mos</span>
                                        </dd>

                                        <!---->
                                        <dd class="medium entity-description truncated-summary"
                                            data-truncated-control="expand-experience-description">




                                            <div class="description truncated medium" tabindex="0" role="text"
                                                dir="ltr">Oversaw operation strategy to achieve financial KPIs and
                                                qualitative indicators of area stores.
                                                Developed and supervised 2 Senior Store Managers and 4 Store Managers.
                                                Developed and launched a project to optimize vacation planning across
                                                all stores, resulting in a 20% reduction in staff shortage during peak
                                                sales. Implemented a shift in the active recruitment period which
                                                increased employee satisfaction and decreased the turnover ratio by 7%
                                                (resignations due to inability to take summer vacation).
                                                Decreased discount ratio and boosted sales by proper inventory
                                                optimization within area stores, increasing gross profit by 3%.
                                                One of the stores awarded as the best top 5 store globally in terms of
                                                highest customer service and shopfloor standards.
                                                Awarded as best Region Sales Operations Manager out of 10 candidates.
                                            </div>
                                            <button class="text-expand-collapse-button medium-light-semibold "
                                                aria-expanded="false" aria-hidden="true">
                                                <span class="see-more">
                                                    …more
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-down-small"></li-icon>
                                                </span>
                                                <span class="see-less">
                                                    See less
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-up-small"></li-icon>
                                                </span>
                                            </button>

                                        </dd>
                                    </dl>
                                </li>
                                <li class="role-container editable">
                                    <a class="edit-section" href="/mwlite/me/edit/position/1985837536"
                                        aria-label="Edit Experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                    <div class="timeline path">
                                        <div class="landmark-container">
                                            <div class="landmark"></div>
                                        </div>
                                    </div>

                                    <dl>
                                        <dt class="medium-semibold">
                                            <span dir="ltr">General Store Manager</span>
                                        </dt>

                                        <dd class="medium time-period">



                                            <span class="medium">Aug 2018 - </span>
                                            <span class="medium">Aug 2019</span>

                                            <span class="dot-separator" aria-hidden="true"></span>
                                            <span>1 yr 1 mo</span>
                                        </dd>

                                        <!---->
                                        <dd class="medium entity-description truncated-summary"
                                            data-truncated-control="expand-experience-description">




                                            <div class="description truncated medium" tabindex="0" role="text"
                                                dir="ltr">Successfully opened the new store from the scratch in the
                                                heart of the Moscow business center.
                                                Developed a unique strategy for the sales floor due to a special
                                                customer profile.
                                                Using the BOSCARD method, made store profitable within 1 year.
                                                Hired and educated a new team (80+ staff).
                                                Increased efficiency (sales per labor hour) up to 140% vs target by
                                                operational planning and staff development.</div>
                                            <button class="text-expand-collapse-button medium-light-semibold "
                                                aria-expanded="false" aria-hidden="true">
                                                <span class="see-more">
                                                    …more
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-down-small"></li-icon>
                                                </span>
                                                <span class="see-less">
                                                    See less
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-up-small"></li-icon>
                                                </span>
                                            </button>

                                        </dd>
                                    </dl>
                                </li>
                                <li class="role-container editable">
                                    <a class="edit-section" href="/mwlite/me/edit/position/1985026804"
                                        aria-label="Edit Experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                    <div class="timeline path">
                                        <div class="landmark-container">
                                            <div class="landmark"></div>
                                        </div>
                                    </div>

                                    <dl>
                                        <dt class="medium-semibold">
                                            <span dir="ltr">Senior Store Manager</span>
                                        </dt>

                                        <dd class="medium time-period">



                                            <span class="medium">Sep 2017 - </span>
                                            <span class="medium">Aug 2018</span>

                                            <span class="dot-separator" aria-hidden="true"></span>
                                            <span>1 yr</span>
                                        </dd>

                                        <!---->
                                        <dd class="medium entity-description truncated-summary"
                                            data-truncated-control="expand-experience-description">




                                            <div class="description truncated medium" tabindex="0" role="text"
                                                dir="ltr">Managed large-scale store with 100+ employees.
                                                Increased sales up to 150% vs target during FIFA World Cup due to
                                                special projects.</div>
                                            <button class="text-expand-collapse-button medium-light-semibold "
                                                aria-expanded="false" aria-hidden="true">
                                                <span class="see-more">
                                                    …more
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-down-small"></li-icon>
                                                </span>
                                                <span class="see-less">
                                                    See less
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-up-small"></li-icon>
                                                </span>
                                            </button>

                                        </dd>
                                    </dl>
                                </li>
                                <li class="role-container editable">
                                    <a class="edit-section" href="/mwlite/me/edit/position/940880719"
                                        aria-label="Edit Experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                    <div class="timeline path">
                                        <div class="landmark-container">
                                            <div class="landmark"></div>
                                        </div>
                                    </div>

                                    <dl>
                                        <dt class="medium-semibold">
                                            <span dir="ltr">Store Manager</span>
                                        </dt>

                                        <dd class="medium time-period">



                                            <span class="medium">Jan 2017 - </span>
                                            <span class="medium">Aug 2017</span>

                                            <span class="dot-separator" aria-hidden="true"></span>
                                            <span>8 mos</span>
                                        </dd>

                                        <!---->
                                        <dd class="medium entity-description truncated-summary"
                                            data-truncated-control="expand-experience-description">




                                            <div class="description truncated medium" tabindex="0" role="text"
                                                dir="ltr">Managed standard store scale with 60+ employees.
                                                Achieved financial KPIs: 100%+ Sales Target, 150%+ Business Profit
                                                Target.
                                                Awarded as the Top 1 store in Russia in terms of highest sales, gross
                                                profit, customer service, and shopfloor standards.</div>
                                            <button class="text-expand-collapse-button medium-light-semibold "
                                                aria-expanded="false" aria-hidden="true">
                                                <span class="see-more">
                                                    …more
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-down-small"></li-icon>
                                                </span>
                                                <span class="see-less">
                                                    See less
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-up-small"></li-icon>
                                                </span>
                                            </button>

                                        </dd>
                                    </dl>
                                </li>
                                <li class="role-container editable">
                                    <a class="edit-section" href="/mwlite/me/edit/position/836025697"
                                        aria-label="Edit Experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                    <div class="timeline path">
                                        <div class="landmark-container">
                                            <div class="landmark"></div>
                                        </div>
                                    </div>

                                    <dl>
                                        <dt class="medium-semibold">
                                            <span dir="ltr">Assistant Store Manager</span>
                                        </dt>

                                        <dd class="medium time-period">



                                            <span class="medium">Aug 2015 - </span>
                                            <span class="medium">Dec 2016</span>

                                            <span class="dot-separator" aria-hidden="true"></span>
                                            <span>1 yr 5 mos</span>
                                        </dd>

                                        <!---->
                                        <dd class="medium entity-description truncated-summary"
                                            data-truncated-control="expand-experience-description">




                                            <div class="description truncated medium" tabindex="0" role="text"
                                                dir="ltr">Promoted to Assistant Store Manager within 1 year through
                                                management trainee program.
                                                Opened a new store as 2nd responsible person on this project.</div>
                                            <button class="text-expand-collapse-button medium-light-semibold "
                                                aria-expanded="false" aria-hidden="true">
                                                <span class="see-more">
                                                    …more
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-down-small"></li-icon>
                                                </span>
                                                <span class="see-less">
                                                    See less
                                                    <li-icon class="icon collapsed-icon icon-colored"
                                                        category="system-icons" type="chevron-up-small"></li-icon>
                                                </span>
                                            </button>

                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li class="entity-lockup profile-entity-lockup grouped ">






                        <!---->
                        <div class="experience-roles-container collapsable-list-container">
                            <ul>
                                <li class="entity-lockup profile-entity-lockup">




                                    <a class="detail-section editable">
                                        <figure aria-hidden="true">
                                            <i class="ghost company company-entity-small" aria-hidden="true"
                                                data-ghost-image="company-4"></i>
                                        </figure>

                                        <dl>
                                            <dt class="large-semibold list-item-heading">
                                                <span dir="ltr">Project Manager</span>
                                            </dt>

                                            <dd class="medium entity-name">
                                                <span dir="ltr">Tour Guide Company «Never Sleep»</span>
                                            </dd>

                                            <dd class="medium time-period">



                                                <span class="medium">Sep 2013 - </span>
                                                <span class="medium">Jul 2015</span>


                                                <span class="dot-separator" aria-hidden="true"></span>
                                                <span>1 yr 11 mos</span>
                                            </dd>

                                            <!---->
                                            <dd class="medium-light entity-description truncated-summary"
                                                data-truncated-control="expand-experience-description">




                                                <div class="description truncated medium" tabindex="0" role="text"
                                                    dir="ltr">The main organizer of 20+ outdoor events for students
                                                    (groups of 100-700)
                                                    ∙ Created project plans for different customers
                                                    ∙ Assembled team, and supervised workers during projects
                                                    ∙ Fundraised: up to 5 partners for each event
                                                    ∙ Searched, selected, and supervised contractors
                                                    ∙ Implemented budget, and procurement for the entire projects</div>
                                                <button class="text-expand-collapse-button medium-light-semibold "
                                                    aria-expanded="false" aria-hidden="true">
                                                    <span class="see-more">
                                                        …more
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-down-small"></li-icon>
                                                    </span>
                                                    <span class="see-less">
                                                        See less
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-up-small"></li-icon>
                                                    </span>
                                                </button>

                                            </dd>
                                        </dl>
                                    </a>

                                    <a class="edit-section" href="/mwlite/me/edit/position/650912734"
                                        aria-label="Edit experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                </li>
                            </ul>
                        </div>

                    </li>
                    <li class="entity-lockup profile-entity-lockup grouped ">






                        <!---->
                        <div class="experience-roles-container collapsable-list-container">
                            <ul>
                                <li class="entity-lockup profile-entity-lockup">




                                    <a class="detail-section editable">
                                        <figure aria-hidden="true">
                                            <i class="ghost company company-entity-small" aria-hidden="true"
                                                data-ghost-image="company-4"></i>
                                        </figure>

                                        <dl>
                                            <dt class="large-semibold list-item-heading">
                                                <span dir="ltr">Project Manager</span>
                                            </dt>

                                            <dd class="medium entity-name">
                                                <span dir="ltr">Training and Personnel Center «Professional
                                                    Growth»</span>
                                            </dd>

                                            <dd class="medium time-period">



                                                <span class="medium">Feb 2013 - </span>
                                                <span class="medium">May 2014</span>


                                                <span class="dot-separator" aria-hidden="true"></span>
                                                <span>1 yr 4 mos</span>
                                            </dd>

                                            <!---->
                                            <dd class="medium-light entity-description truncated-summary"
                                                data-truncated-control="expand-experience-description">




                                                <div class="description truncated medium" tabindex="0" role="text"
                                                    dir="ltr">∙ Event management
                                                    Organized 6 city job fairs in 3 of Russia's major cities with 3000+
                                                    participants.
                                                    ∙ Account management
                                                    Managed portfolio of all existing 50+ clients and attracted 10+ new
                                                    clients.
                                                    Supervised my own assistant and managed the execution of his work.
                                                    ∙ Product development
                                                    Conducted a sociological survey based on data from visitors from job
                                                    fairs.
                                                    Analyzed job fair results, created reports, and offered changes to
                                                    the global strategy.</div>
                                                <button class="text-expand-collapse-button medium-light-semibold "
                                                    aria-expanded="false" aria-hidden="true">
                                                    <span class="see-more">
                                                        …more
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-down-small"></li-icon>
                                                    </span>
                                                    <span class="see-less">
                                                        See less
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-up-small"></li-icon>
                                                    </span>
                                                </button>

                                            </dd>
                                        </dl>
                                    </a>

                                    <a class="edit-section" href="/mwlite/me/edit/position/430312503"
                                        aria-label="Edit experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                </li>
                            </ul>
                        </div>

                    </li>
                    <li class="entity-lockup profile-entity-lockup grouped ">






                        <!---->
                        <div class="experience-roles-container collapsable-list-container">
                            <ul>
                                <li class="entity-lockup profile-entity-lockup">




                                    <a class="detail-section editable">
                                        <figure aria-hidden="true">
                                            <i class="ghost company company-entity-small" aria-hidden="true"
                                                data-ghost-image="company-1"></i>
                                        </figure>

                                        <dl>
                                            <dt class="large-semibold list-item-heading">
                                                <span dir="ltr">Project Manager</span>
                                            </dt>

                                            <dd class="medium entity-name">
                                                <span dir="ltr">All-Russia Science Festival</span>
                                            </dd>

                                            <dd class="medium time-period">



                                                <span class="medium">Aug 2013 - </span>
                                                <span class="medium">Dec 2013</span>


                                                <span class="dot-separator" aria-hidden="true"></span>
                                                <span>5 mos</span>
                                            </dd>

                                            <!---->
                                            <dd class="medium-light entity-description truncated-summary"
                                                data-truncated-control="expand-experience-description">




                                                <div class="description truncated medium" tabindex="0" role="text"
                                                    dir="ltr">Head of the Call Center
                                                    ∙ Created totally new structure for the Call Center of the
                                                    All-Russia Science Festival
                                                    ∙ Recruited and trained 20+ staff, created a working schedule, and
                                                    supervised workers
                                                    Head of the BTL department
                                                    ∙ Analyzed, prepared, and executed a two-month promotional plan
                                                    ∙ Recruited and coordinated 30+ promoters, created reports</div>
                                                <button class="text-expand-collapse-button medium-light-semibold "
                                                    aria-expanded="false" aria-hidden="true">
                                                    <span class="see-more">
                                                        …more
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-down-small"></li-icon>
                                                    </span>
                                                    <span class="see-less">
                                                        See less
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-up-small"></li-icon>
                                                    </span>
                                                </button>

                                            </dd>
                                        </dl>
                                    </a>

                                    <a class="edit-section" href="/mwlite/me/edit/position/521623078"
                                        aria-label="Edit experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                </li>
                            </ul>
                        </div>

                    </li>
                    <li class="entity-lockup profile-entity-lockup grouped ">






                        <!---->
                        <div class="experience-roles-container collapsable-list-container">
                            <ul>
                                <li class="entity-lockup profile-entity-lockup">




                                    <a class="detail-section editable">
                                        <figure aria-hidden="true">
                                            <i class="ghost company company-entity-small" aria-hidden="true"
                                                data-ghost-image="company-2"></i>
                                        </figure>

                                        <dl>
                                            <dt class="large-semibold list-item-heading">
                                                <span dir="ltr">Vice Chairman</span>
                                            </dt>

                                            <dd class="medium entity-name">
                                                <span dir="ltr">Student Life Organization in Department of Physics
                                                    MSU</span>
                                            </dd>

                                            <dd class="medium time-period">



                                                <span class="medium">Feb 2011 - </span>
                                                <span class="medium">Sep 2013</span>


                                                <span class="dot-separator" aria-hidden="true"></span>
                                                <span>2 yrs 8 mos</span>
                                            </dd>

                                            <!---->
                                            <dd class="medium-light entity-description truncated-summary"
                                                data-truncated-control="expand-experience-description">




                                                <div class="description truncated medium" tabindex="0" role="text"
                                                    dir="ltr">Organized 10+ department events (400+ participants, 18+
                                                    subordinate workers)
                                                    Developed Public Relations Committee (16+ subordinate workers) for
                                                    event promotion
                                                    ∙ Created promotional plans for the events and supervised their
                                                    realization
                                                    ∙ Improved strategy for managing the website and social networks
                                                    Created the Human Resources Center
                                                    ∙ Structured and increased the database of volunteers
                                                    ∙ Assessed staff performance and developed a system of motivation
                                                    ∙ Lectured 10+ workshops, such as «Event Planning» and «Public
                                                    Relations Planning»</div>
                                                <button class="text-expand-collapse-button medium-light-semibold "
                                                    aria-expanded="false" aria-hidden="true">
                                                    <span class="see-more">
                                                        …more
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-down-small"></li-icon>
                                                    </span>
                                                    <span class="see-less">
                                                        See less
                                                        <li-icon class="icon collapsed-icon icon-colored"
                                                            category="system-icons" type="chevron-up-small"></li-icon>
                                                    </span>
                                                </button>

                                            </dd>
                                        </dl>
                                    </a>

                                    <a class="edit-section" href="/mwlite/me/edit/position/521624072"
                                        aria-label="Edit experience" data-control="edit-experience">
                                        <li-icon category="system-icons" type="edit-medium"></li-icon>
                                    </a>

                                </li>
                            </ul>
                        </div>

                    </li>
                </ol>





                <button class="medium-semibold toggle-list-collapse see-more" aria-expanded="false">
                    <span data-control="see-more-experience" aria-label="See 3 more experiences">
                        See more
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-down-small"></li-icon>
                    </span>
                </button>

                <button class="see-less medium-semibold toggle-list-collapse" aria-expanded="true">
                    <span data-control="see-less-experience" aria-label="See fewer experiences">
                        See less
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-up-small"></li-icon>
                    </span>
                </button>


            </section>

            <!---->







            <section class="education-container list-container">













                <section class="collapsable-list-container hide-add-link" aria-expanded="false">

                    <h4 class="list-heading large ">Education</h4>
                    <a class="add-link has-items" href="/mwlite/me/add/education" data-control="add-education">
                        <li-icon class="add-btn" category="system-icons" type="add-small"></li-icon>
                        <span class="add-link-text medium-semibold">Add education</span>
                    </a>


                    <!---->
                    <ol>
                        <li class="entity-lockup profile-entity-lockup visible-entity">

                            <a class="detail-section editable"
                                href="/mwlite/school/%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-%D0%B8%D0%BC.-%D0%BC.%D0%B2.-%D0%BB%D0%BE%D0%BC%D0%BE%D0%BD%D0%BE%D1%81%D0%BE%D0%B2%D0%B0-%D0%BC%D0%B3%D1%83-">
                                <figure aria-hidden="true">

                                    <img data-delayed-url="https://media.licdn.com/dms/image/C560BAQFafJR7i-j8EA/company-logo_100_100/0/1557584831531?e=1689206400&amp;v=beta&amp;t=lk-ndner95rrM6DP-hr8jz6ga-nw8LoIQZuz22WIj5c"
                                        width="100" height="100">
                                </figure>

                                <dl>
                                    <dt class="large-semibold list-item-heading">
                                        <span dir="ltr">Московский Государственный Университет им. М.В. Ломоносова
                                            (МГУ)</span>
                                    </dt>
                                    <dd class="medium entity-name">
                                        <span dir="ltr">Masters degree in Physics</span >
                                        <span class="dot-separator"></span>
                                        <span dir="ltr">Physics of Semiconductors and Dielectrics</span>
                                    </dd >
                                    <dd class="medium time-period">



                                        <span class="medium">2009 - </span>
                                        <span class="medium">2015</span>

                                    </dd>
                                    <dd class="medium education-grade">Grade: <span dir="ltr">4,1</span></dd>

                                    <!---->
                                    < !---->
                                </dl >
                            </a >
    <a class="edit-section" href="/mwlite/me/edit/education/271160580"
        aria-label="Edit education" data-control="edit-education">
        <li-icon category="system-icons" type="edit-medium"></li-icon>
    </a>
                        </li >
                    </ol >
                    < !---->
                </section >

            </section >


            <div class="add-new-container">
                <div class="education-bg card-icon-block"></div>
                <h4 class="card-title large">Have more education?</h4>
                <p class="card-subtitle medium-light">Add your degree and college, get 11x more profile views. Connect
                    with your college mates</p>

                <a href="/mwlite/me/add/education" class="rect-link-btn component-theme body-medium-bold medium ">
                    <div class="rect-link-btn__wrapper btn-component secondary  ">

                        <!---->
                        <span class="rect-link-btn__label">Add education</span>
                        <!---->
                    </div>
                </a>


                <span class="close-button"
                    data-lego="3cZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoNfmhBt7dBtn5BkCRRrypejQBkildfk3RVgD9Bp79ft6lDp6BT9CVLqnhxoTlAplZAp65vpmNFpCZOs44P9mlQqmMZp4BQpmtAqnsCc3RKrSBQqndLk7hBpShFtOoMbz0Zpn9LoRdOpOoZsC5gr6lisCsCfmhLjmNBkD9D9z4ZrCZFt6BPrR1MtmZOpOoPfmhBt7dBtn5BkCRRjD1RrT9D9CVLqnhxoTlAplZAp64Zp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9ChOomdvrCZFt6dBsRZAp64Zp4BQrSNP9DhItm5CpmgZp4BQtmZVomMCpCNBsRZBr6BCrT9MnSlQqmNTrlZMfmlJokVBpS5M9ClIqm9LrjRAin1MoioOd3gSd3RAimVLqndOpnoCdjgNdzwMejsOfmh9tioPc3tyemlAczAUoCkJd35yoyRAe3wQbmlAczcJd3dCp3xyojgZp4BQu6lQrCZz"
                    data-container=".education-container .collapsable-list-container">

                    <button
                        class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple  js-round-btn"
                        type="button">
                        <li-icon class="round-btn__icn" category="system-icons" type="close-small"></li-icon>
                        <span class="visually-hidden">
                            Dismiss add education prompt
                        </span>
                    </button>

                </span>
            </div>














            <section class="collapsable-list-container list-container volunteer-container experience-container "
                aria-expanded="false">

                <h4 class="list-heading large ">Volunteer experience</h4>
                <a class="add-link " href="/mwlite/me/edit/volunteer-experience/new" data-control="add-volunteer">
                    <li-icon class="add-btn" category="system-icons" type="add-small"></li-icon>
                    <span class="add-link-text medium-semibold">Add volunteering</span>
                </a>


                <ol>
                    <!---->
                </ol>
                <!---->
            </section>












            <section class="skills-container list-container collapsable-list-container   collapsed"
                aria-expanded="true">

                <h4 class="list-heading large ">Skills</h4>
                <a class="add-link has-items" href="/mwlite/me/edit/skills/new" data-control="add-skills">
                    <li-icon class="add-btn" category="system-icons" type="add-small"></li-icon>
                    <span class="add-link-text medium-semibold">Add skills</span>
                </a>


                <!---->
                <a class="edit-section" href="/mwlite/me/edit/skills" aria-label="Edit skills"
                    data-control="edit-skills">
                    <li-icon category="system-icons" type="edit-medium"></li-icon>
                </a>

                <ul id="skills-list" class="skills-list">
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Node.js</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">React.js</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">AngularJS</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Microsoft SQL Server</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">MongoDB</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Postman API</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Object-Oriented Programming (OOP)</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">TypeScript</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Project Management</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Team Management</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Business Development</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Store Management</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Cross-functional Team Leadership</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Coaching &amp; Mentoring</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Sales Management</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                    <li class="skill-item body-small-bold">
                        <span dir="ltr">Profit &amp; Loss Management</span>
                        <span class="dot-separator" aria-hidden="true"></span>
                    </li>
                </ul>





                <button class="medium-semibold toggle-list-collapse see-more" aria-expanded="false">
                    <span data-control="see-more-skills" aria-label="See 6 more skills">
                        See more
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-down-small"></li-icon>
                    </span>
                </button>

                <button class="see-less medium-semibold toggle-list-collapse" aria-expanded="true">
                    <span data-control="see-less-skills" aria-label="See fewer skills">
                        See less
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-up-small"></li-icon>
                    </span>
                </button>

            </section>

            <!---->










            <section class="recommendations-container list-container collapsable-list-container collapsed"
                aria-expanded="true">

                <h4 class="list-heading large ">Recommendations</h4>
                <a class="add-link has-items" href="/mwlite/me/detail/recommendation/ask">
                    <li-icon class="add-btn" category="system-icons" type="add-small"></li-icon>
                    <span class="add-link-text medium-semibold">Ask to be recommended</span>
                </a>


                <div id="recommendation-list">
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary visible-entity">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">I had a lot of
                                opportunities to work closely with Mila in Uniqlo on different projects ranging from
                                Inventory Control initiatives to Staff education programms. Her strong leadership
                                abilities start from ability to pursue an ideal picture, vision of where she wants the
                                team and the company to be. To achieve this aspiration, she utilizes strong team
                                building skills to create a strong winning team, involving not only her direct
                                subordinates, but colleagues from all the departments related to the target. Although
                                very experienced and confident in herself, she doesn't hesitate to accept feedback from
                                superiors and subordinates and change her ways of working to become stronger. Finally,
                                she can deliver significant, specific, measurable results within the deadlines.</div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B1%D1%80%D1%83%D0%BC%D0%B0-568131b5"
                            class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C4D03AQGcXKtEI41nzg/profile-displayphoto-shrink_100_100/0/1617806604759?e=1686787200&amp;v=beta&amp;t=-yzJ7zssjjcbHdKUsMhrZBZN3gPqtcR630q5pM0fVTs">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Евгений Брума</dt>
                                <dd class="medium-light">Head of Training &amp; Development department Uniqlo Russia
                                </dd>
                                <dd class="medium-light">February 8, 2023, Евгений worked with Liudmila in different
                                    groups</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary visible-entity">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">Mila used to be
                                my first Store Manager when I just joined the company and my first Area Manager when I
                                was promoted to Store Manager. In my opinion, Mila stands out in her ability to
                                understand and explain even complex data, and she excels at communicating with clients
                                and team members in a personalized way. She is also proactive in finding new and
                                efficient ways of doing things, and Mila is always striving to improve herself and her
                                work. Overall, I highly recommend Mila for any business leadership position because of
                                her unique approach and dedication to excellence.</div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/elizaveta-borovaia-a010b9162" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C4D03AQHTB-yy5K4e0w/profile-displayphoto-shrink_100_100/0/1628869472880?e=1686787200&amp;v=beta&amp;t=ABE9aVf_FonJNE7H0y8Uhrm_gkKOvPrXE0UKsGQW_I8">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Elizaveta Borovaia</dt>
                                <dd class="medium-light">Senior Store Manager in fashion business / Senior Specialist in
                                    Store Operation Support department</dd>
                                <dd class="medium-light">December 26, 2022, Elizaveta reported directly to Liudmila</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary ">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">During the time
                                while Liudmila was my senior, Liudmila acted as an experienced manager who could react
                                rapidly in urgent and unstable situations.
                                Liudmila as a manager could always find a balance between interfering in process when
                                she was needed and educate her subordinates to be future business people who could
                                manage everything by themselves. In addition, all decisions and actions Liudmila made
                                were based on facts, numbers and deep analysis of current environment.
                                Work with Liudmila showed me that she can adapt easily in fast-changing environment and
                                can make decisions both based on your experience and out of the box.
                                Overall, I can recommend Liudmila as a strong manager with both strong analytical and
                                communication skills.</div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/olga-sharko-991535126" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C5103AQG3D5-Sw5YYxg/profile-displayphoto-shrink_100_100/0/1517506522688?e=1686787200&amp;v=beta&amp;t=7zpKUSMUq5KhKhnCpDoDXsDwxUDX6XIb61phlI13WzM">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Olga Sharko</dt>
                                <dd class="medium-light">Area Manager / Team Leader </dd>
                                <dd class="medium-light">December 21, 2022, Olga reported directly to Liudmila</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary ">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">I used to
                                collaborate with Mila, when she was Store Manager and Area Manager later on. I can
                                remember her always having positive initiatives for our business and continuously
                                achieving the highest standard of execution. Her stores were always having high internal
                                evaluations and deserved global recognition.

                                Mila has good understanding of business from management perspective, always applying
                                cost-benefit analysis to her decisions. While communicating with her, I could see her
                                cost consciousness and make the best decision for the company. For example, in terms of
                                budget discipline her stores were always the best, because everyone understood
                                importance of cost management even for some small type of expenses.

                                Overall, I’ve had very productive time working with Mila and I fully confident in her
                                managerial skills. I am sure she will bring positive impact in any related business.
                            </div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/oleg-shamonov-bb081850" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C5103AQFCG66ybzarnw/profile-displayphoto-shrink_100_100/0/1516460057636?e=1686787200&amp;v=beta&amp;t=Bid8c7PQSI6X9rtzsexCVKC9YHO78bkBfPlYjhIKc4I">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Oleg Shamonov</dt>
                                <dd class="medium-light">Head of Procurement</dd>
                                <dd class="medium-light">December 21, 2022, Oleg worked with Liudmila in different
                                    groups</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary ">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">I've had an
                                opportunity to work with Liudmila during taking the position of General Store Manager in
                                Uniqlo under her supervising. That period of time was very challenging for me, however,
                                Liudmila helped me to learn new skills and supported with all related issues.
                                Liudmila is a hard worker, top-performing, organised and diligent person. She was always
                                open to any kind of feedback, tried to find new ways in overcoming challenges. Liudmila
                                is one of the best person in business processes optimisation, handling multiple tasks,
                                searching for new ways and perspectives not only for her team but for the whole company.
                                In addition, Ludmila has excellent communication skills, always has a positive and
                                challenges overcoming attitude, knows how to work with a team and build good
                                relationships with colleagues. She is interested in the development of her team, always
                                100% invests in the development of her subordinates.
                                For me, it was a great pleasure to work together.</div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/tatiana-khodunova" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/D4E03AQFDOCX0DCGckg/profile-displayphoto-shrink_100_100/0/1666256138547?e=1686787200&amp;v=beta&amp;t=U2kWAiJ5gMGD__XmSXO2w9J5brHeobbkYdPqw2jNjfs">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Tatiana Khodunova</dt>
                                <dd class="medium-light">General Store Manager in UNIQLO with 5 years experience in
                                    fashion retail industry/Team Lead</dd>
                                <dd class="medium-light">December 19, 2022, Tatiana reported directly to Liudmila</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary ">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">Mila was a
                                great professional to work with. We worked together at UNIQLO Russia and she helped me a
                                lot to understand internal management processes.
                                Her work ethics is immaculate and so easy to work together with. She goes out of her way
                                when you ask for some help and guidance and always went the extra mile and found great
                                ways to quickly solve problems.
                                Thanks, MIla! Her contributions were really valuable to the team. I highly recommend
                                Mila and would love to work together again.”</div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/ruslan-niazbaev-b8b0a3221" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C4E03AQFRAyrewB9Ihg/profile-displayphoto-shrink_100_100/0/1657047505458?e=1686787200&amp;v=beta&amp;t=47nIb9PA0xWNCLKq78CLRwmxp0xTeLTRDuLY7BK1XTI">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Ruslan Niazbaev</dt>
                                <dd class="medium-light">JavaScript Fullstack Developer • React I Redux I JavaScript I
                                    Node.js I Express I PostgreSQL •</dd>
                                <dd class="medium-light">December 16, 2022, Ruslan worked with Liudmila in the same
                                    group</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary ">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">I can recommend
                                Mila as the charismatic inspiring team leader, very supportive in all (HR) human-related
                                projects, always opened to new initiatives. Mila is very responsible and 100% committed
                                to all tasks she is assigned to. It was huge pleasure to work with her.</div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/daria-orlova-44203643" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C4D03AQGCRbhLO2rGiw/profile-displayphoto-shrink_100_100/0/1648739542799?e=1686787200&amp;v=beta&amp;t=GbeQSWxPGjAijC1LFNVJVMG3-J8RXWYVUOeZpi-EIos">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Daria Orlova</dt>
                                <dd class="medium-light">Area HR – UNIQLO</dd>
                                <dd class="medium-light">December 15, 2022, Daria worked with Liudmila in different
                                    groups</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary ">




                            <div class="description complete-text medium" tabindex="0" dir="ltr">Liudmila was a very
                                professional, organized, hard-working and highly motivating colleague. She led her store
                                team with enthusiasm and personal approach with the aim to make each customer happy.
                            </div>

                        </div>
                        <a href="/mwlite/in/victor-bashkir-3b58539a" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C4E03AQEd-SiV34HHng/profile-displayphoto-shrink_100_100/0/1516950231010?e=1686787200&amp;v=beta&amp;t=DXnaK4Ol9M2zwB4jtMAYC7kTft6F14EDDKRt8hsyZ-M">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Victor Bashkir</dt>
                                <dd class="medium-light">Store Development &amp; Construction Project Manager at UNIQLO
                                </dd>
                                <dd class="medium-light">December 14, 2022, Victor worked with Liudmila in different
                                    groups</dd>
                            </dl>
                        </a>
                    </div>
                    <div class="recommendation-item">
                        <div class="recommendation-text truncated-summary ">




                            <div class="description truncated medium" tabindex="0" role="text" dir="ltr">Mila is one of
                                the best supervisors that I have ever had. She was leading several Store Managers
                                including me. And I can definitely say that her vision, detail-oriented approach and
                                constant focus on optimization in every part of the business processes enables her to
                                build an effective organization with stability and progress. She always knows how to
                                deal with any issue or topic which may arise. She is very motivating, open-minded person
                                who is always ready to help you anytime, anywhere.
                                Mila is one of few people who have always had a clear track for reaching and
                                overreaching the company's targets. And it makes all her subordinates follow her lead
                                and be sure in all steps further on. That's how she makes the team meet the goals and
                                even more.
                                I would like to thank Mila for all the learnings she taught me. And I would definitely
                                recommend her as big professional.</div>
                            <button class="text-expand-collapse-button medium-light-semibold " aria-expanded="false"
                                aria-hidden="true">
                                <span class="see-more">
                                    …more
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-down-small"></li-icon>
                                </span>
                                <span class="see-less">
                                    See less
                                    <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                                        type="chevron-up-small"></li-icon>
                                </span>
                            </button>

                        </div>
                        <a href="/mwlite/in/daryakuznetsovas" class="recommendor-details">
                            <figure class="recommender-image-container" aria-hidden="true">
                                <img class="person-entity-small" data-delayed-alt="profile-image"
                                    data-delayed-url="https://media.licdn.com/dms/image/C4D03AQGTF2trA6Lqmw/profile-displayphoto-shrink_100_100/0/1648573122598?e=1686787200&amp;v=beta&amp;t=ZfsZQAXXp8LnCMxBX0qqSMTnzfL1xgCJKpKY1hyT15s">
                            </figure>
                            <dl class="recommender-description">
                                <dt class="medium-dark-semibold">Darya Kuznetsova</dt>
                                <dd class="medium-light">Product Owner</dd>
                                <dd class="medium-light">April 11, 2022, Darya reported directly to Liudmila</dd>
                            </dl>
                        </a>
                    </div>
                </div>




                <button class="medium-semibold toggle-list-collapse see-more" aria-expanded="false">
                    <span aria-label="See 7 more recommendations">
                        See more
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-down-small"></li-icon>
                    </span>
                </button>

                <button class="see-less medium-semibold toggle-list-collapse" aria-expanded="true">
                    <span aria-label="See fewer recommendations">
                        See less
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-up-small"></li-icon>
                    </span>
                </button>

            </section>






            <section class="accomplishments-section list-container">


                <h4 class="list-heading large ">Accomplishments</h4>
                <button class="add-link btn has-items" data-control="add-accomplishments">
                    <li-icon class="add-btn" category="system-icons" type="add-small"></li-icon>
                    <span class="add-link-text medium-semibold">Add accomplishments</span>
                </button>


                <div id="accomplishment-list">

                    <div class="accomplishment-list self-profile">








                        <div class="accomplishment-type certifications-section">
                            <div class="count-container double-extra-large-light">
                                3
                            </div>
                            <div class="detail-container collapsable-list-container " aria-expanded="false">
                                <header class="large-semibold sub-section-heading">Certifications</header>
                                <ul>
                                    <li class="sub-list-item can-edit visible-entity">
                                        <dl class="list-item-body">
                                            <dt class="list-item-heading medium-semibold" dir="ltr">Agile Project
                                                Management fundamentals for IT Outsource</dt>
                                            <dd class="medium-light list-item-detail truncated-summary" dir="ltr">




                                                <div class="description complete-text medium" tabindex="0" dir="ltr">
                                                    Udemy</div>

                                            </dd>
                                        </dl>
                                        <a class="edit-section" href="/mwlite/me/edit/certification/1498703354"
                                            aria-label="Edit certification" data-control="edit-accomplishments">
                                            <li-icon category="system-icons" type="edit-medium"></li-icon>
                                        </a>
                                    </li>
                                    <li class="sub-list-item can-edit visible-entity">
                                        <dl class="list-item-body">
                                            <dt class="list-item-heading medium-semibold" dir="ltr">Understanding Jira
                                                for users, managers and admins</dt>
                                            <dd class="medium-light list-item-detail truncated-summary" dir="ltr">




                                                <div class="description complete-text medium" tabindex="0" dir="ltr">
                                                    Udemy</div>

                                            </dd>
                                        </dl>
                                        <a class="edit-section" href="/mwlite/me/edit/certification/649068132"
                                            aria-label="Edit certification" data-control="edit-accomplishments">
                                            <li-icon category="system-icons" type="edit-medium"></li-icon>
                                        </a>
                                    </li>
                                    <li class="sub-list-item can-edit visible-entity">
                                        <dl class="list-item-body">
                                            <dt class="list-item-heading medium-semibold" dir="ltr">The Agile Samurai
                                                Bootcamp</dt>
                                            <dd class="medium-light list-item-detail truncated-summary" dir="ltr">




                                                <div class="description complete-text medium" tabindex="0" dir="ltr">
                                                    Udemy</div>

                                            </dd>
                                        </dl>
                                        <a class="edit-section" href="/mwlite/me/edit/certification/649473794"
                                            aria-label="Edit certification" data-control="edit-accomplishments">
                                            <li-icon category="system-icons" type="edit-medium"></li-icon>
                                        </a>
                                    </li>
                                </ul>
                                <!---->
                            </div>
                        </div>








                        <div class="accomplishment-type languages-section">
                            <div class="count-container double-extra-large-light">
                                2
                            </div>
                            <div class="detail-container collapsable-list-container " aria-expanded="false">
                                <header class="large-semibold sub-section-heading">Languages</header>
                                <ul>
                                    <li class="sub-list-item  visible-entity">
                                        <dl class="list-item-body">
                                            <dt class="list-item-heading medium-semibold" dir="ltr">English</dt>
                                        </dl>
                                        <a class="edit-section" href="/mwlite/me/edit/language/650912735"
                                            aria-label="Edit language" data-control="edit-languages">
                                            <li-icon category="system-icons" type="edit-medium"></li-icon>
                                        </a>
                                    </li>
                                    <li class="sub-list-item  visible-entity">
                                        <dl class="list-item-body">
                                            <dt class="list-item-heading medium-semibold" dir="ltr">Russian</dt>
                                        </dl>
                                        <a class="edit-section" href="/mwlite/me/edit/language/826235806"
                                            aria-label="Edit language" data-control="edit-languages">
                                            <li-icon category="system-icons" type="edit-medium"></li-icon>
                                        </a>
                                    </li>
                                </ul>
                                <!---->
                            </div>
                        </div>








                        <!---->








                        <!---->







                        <!---->







                        <!---->







                        <!---->








                        <!---->







                        <!---->

                    </div>

                </div>
            </section>














            <div id="addAccompishmentsOverlay" class="accomplishments-overlay overlay hidden" role="dialog">
                <div id="accomplishments-menu">
                    <header class="accomplishments-menu-header">
                        <h3 class="large-semibold">Add Accomplishments</h3>

                        <button data-action-title="cancel-button" class="close-accomplishments-menu-btn">
                            <li-icon a11y-text="Dismiss accomplishments menu" category="system-icons"
                                type="close-medium"></li-icon>
                        </button>
                    </header>
                    <ul class="menu-list medium">
                        <li>
                            <a href="/mwlite/me/edit/publication/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="newspaper-medium"></li-icon>
                                Publications
                            </a>
                        </li>

                        <li>
                            <a href="/mwlite/me/edit/patent/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="document-medium"></li-icon>
                                Patents
                            </a>
                        </li>

                        <li>
                            <a href="/mwlite/me/edit/course/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="notebook-medium"></li-icon>
                                Courses
                            </a>
                        </li>

                        <li>
                            <a href="/mwlite/me/edit/project/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="folder-medium"></li-icon>
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="/mwlite/me/edit/honor/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="star-outline-medium"></li-icon>
                                Honors & Awards
                            </a>
                        </li>

                        <li>
                            <a href="/mwlite/me/edit/test-score/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="clipboard-check-medium"></li-icon>
                                Test Scores
                            </a>
                        </li>

                        <li>
                            <a href="/mwlite/me/edit/language/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="globe-language-medium"></li-icon>
                                Languages
                            </a>
                        </li>
                        <li>
                            <a href="/mwlite/me/edit/organization/new">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="company-medium"></li-icon>
                                Organizations
                            </a>
                        </li>
                        <li>
                            <a href="/mwlite/me/add/certification">
                                <li-icon class="icon collapsed-icon" category="system-icons"
                                    type="certificate-medium"></li-icon>
                                Certification
                            </a>
                        </li>

                    </ul>
                </div>
            </div>















            <section class="contacts-container collapsable-list-container list-container" aria-expanded="false">


                <h4 class="list-heading large ">Contact</h4>
                <!---->

                <a class="edit-section" href="/mwlite/profile/edit/contact-info/" aria-label="Edit contact">
                    <li-icon category="system-icons" type="edit-medium"></li-icon>
                </a>

                <ul id="contact-list">
                    <li class="contact-info email">
                        <div class="icon-container">
                            <li-icon category="system-icons" type="envelope-medium"></li-icon>
                        </div>
                        <div class="contact-detail-container">
                            <p class="contact-title large-semibold">Email</p>
                            <a class="contact-value medium-light"
                                href="mailto:mila.shurupova@gmail.com">mila.shurupova@gmail.com</a>
                        </div>
                    </li>
                    <!----><!---->
                    <li class="contact-info">
                        <div class="icon-container">
                            <li-icon category="system-icons" type="linkedin-bug-medium"></li-icon>
                        </div>
                        <div class="contact-detail-container">
                            <p class="contact-title large-semibold public-profile">LinkedIn</p>
                            <a class="medium-light contact-value" target="_blank"
                                href="https://www.linkedin.com/in/liudmilashurupova">https://www.linkedin.com/in/liudmilashurupova</a>
                        </div>
                    </li>
                    <!---->
                </ul>




                <button class="medium-semibold toggle-list-collapse see-more" aria-expanded="false">
                    <span data-control="see-more-contact" aria-label="See more contact details">
                        See more
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-down-small"></li-icon>
                    </span>
                </button>

                <button class="see-less medium-semibold toggle-list-collapse" aria-expanded="true">
                    <span data-control="see-less-contact" aria-label="See fewer contact details">
                        See less
                        <li-icon class="icon collapsed-icon icon-colored" category="system-icons"
                            type="chevron-up-small"></li-icon>
                    </span>
                </button>

            </section>

        </div >












        <div class="pav-container">

            <h4 class="list-heading large ">People also viewed</h4>
            <!---->














            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/olga-sharko-991535126" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/C5103AQG3D5-Sw5YYxg/profile-displayphoto-shrink_100_100/0/1517506522688?e=1686787200&amp;v=beta&amp;t=7zpKUSMUq5KhKhnCpDoDXsDwxUDX6XIb61phlI13WzM"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/olga-sharko-991535126" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Olga Sharko
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    Area Manager / Team Leader
                                </span>
                            </div>


                        </a>


                        <span data-memberid="520877629" data-vanityname="olga-sharko-991535126">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAAB8L9j0BSIt6eGp6JARyvI4gLM-Vc7WXW-0"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/brodetskiyveniamin" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/C4D03AQEp3rNO2GVOQQ/profile-displayphoto-shrink_100_100/0/1647796608259?e=1686787200&amp;v=beta&amp;t=gGXtGxyfTpe9K1qvevutlMhvtal4NHYL9x-ykTC0KOw"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/brodetskiyveniamin" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Veniamin Brodetskiy
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    Junior Full Stack Developer | C# · TypeScript · JavaScript · C · Node.js · React ·
                                    Angular
                                </span>
                            </div>


                        </a>


                        <span data-memberid="334171676" data-vanityname="brodetskiyveniamin">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAABPrDhwB_2rKLltGxqvZjyUv8ivI10SP02Y"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/dshafran" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/D4D35AQEAW3dgcKOtyQ/profile-framedphoto-shrink_100_100/0/1665871375900?e=1681999200&amp;v=beta&amp;t=24tWcArr7zH9t7fjNXRR9umRhsgFMrqoslF-FLax__k"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/dshafran" class="entity-path primary-details" data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Dmitrii Shafran
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    Product manager | Project Manager in B2B SaaS &amp; software
                                </span>
                            </div>


                        </a>


                        <span data-memberid="1015449082" data-vanityname="dshafran">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAADyGhfoBJIweXpVgQ8GcNRNtFwBZ5-D0-HA"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/ruslan-niazbaev-b8b0a3221" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/C4E03AQFRAyrewB9Ihg/profile-displayphoto-shrink_100_100/0/1657047505458?e=1686787200&amp;v=beta&amp;t=47nIb9PA0xWNCLKq78CLRwmxp0xTeLTRDuLY7BK1XTI"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/ruslan-niazbaev-b8b0a3221" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Ruslan Niazbaev
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <span class="badge-icon" aria-label="Premium">
                                    <li-icon class="premium-icon" category="logos-bugs"
                                        type="linkedin-bug-xxsmall"></li-icon>
                                </span>
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    JavaScript Fullstack Developer • React I Redux I JavaScript I Node.js I Express I
                                    PostgreSQL •
                                </span>
                            </div>


                        </a>


                        <span data-memberid="934827227" data-vanityname="ruslan-niazbaev-b8b0a3221">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAADe4VNsB8w8hhbsAe-4SQWf_M7mKAwt63PM"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/yulia-kudryashova-b92bbb21" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/C5603AQEVW8OnWqb28w/profile-displayphoto-shrink_100_100/0/1516888224597?e=1686787200&amp;v=beta&amp;t=_1DXdU-pHyeMwptKS88TTAuxB3cXGUBavo3OQwPaUaU"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/yulia-kudryashova-b92bbb21" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Yulia Kudryashova
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <span class="badge-icon" aria-label="Premium">
                                    <li-icon class="premium-icon" category="logos-bugs"
                                        type="linkedin-bug-xxsmall"></li-icon>
                                </span>
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    HR BP/Recruitment Manager at Uniqlo Russia
                                </span>
                            </div>


                        </a>


                        <span data-memberid="77635550" data-vanityname="yulia-kudryashova-b92bbb21">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAAASgn94B5lgx5E68Ok0hSoVNg75B6Uvwezc"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/george-kladovikov-935874235" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/C5603AQElNzMledZ3hA/profile-displayphoto-shrink_100_100/0/1648732191344?e=1686787200&amp;v=beta&amp;t=3hk2UKa-vkaVwPruTIdOmYxjMxKH90xJ4apWBICm4lc"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/george-kladovikov-935874235" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    George Kladovikov
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    General Store Manager in UNIQLO with 5+ years of experience in fashion retail
                                    industry. Leader in Customer service, KPI achievement, Operational management and
                                    Human development.
                                </span>
                            </div>


                        </a>


                        <span data-memberid="984532793" data-vanityname="george-kladovikov-935874235">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAADquxzkBvo7zvzEDDSs3ejMHPmbs7bVphMI"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/tatiana-khodunova" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/D4E03AQFDOCX0DCGckg/profile-displayphoto-shrink_100_100/0/1666256138547?e=1686787200&amp;v=beta&amp;t=U2kWAiJ5gMGD__XmSXO2w9J5brHeobbkYdPqw2jNjfs"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/tatiana-khodunova" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Tatiana Khodunova
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    General Store Manager in UNIQLO with 5 years experience in fashion retail
                                    industry/Team Lead
                                </span>
                            </div>


                        </a>


                        <span data-memberid="465950986" data-vanityname="tatiana-khodunova">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAABvF2QoBJBfVIbS4RlAP6hDPpt-0XYxfkS0"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/nataliakhamudisova" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/C4E03AQEIV0tjrBs8sw/profile-displayphoto-shrink_100_100/0/1608022163778?e=1686787200&amp;v=beta&amp;t=ISt-hsqyV9qPBlfgNFHMtOqvTIGclIEbUyQp7PeMGZc"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/nataliakhamudisova" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Natalia Khamudisova
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    Area Manager at UNIQLO
                                </span>
                            </div>


                        </a>


                        <span data-memberid="56273102" data-vanityname="nataliakhamudisova">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAAANaqM4BUSFa1O3CMn8jlrAPMLFCwr76mQk"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/евгений-брума-568131b5" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/C4D03AQGcXKtEI41nzg/profile-displayphoto-shrink_100_100/0/1617806604759?e=1686787200&amp;v=beta&amp;t=-yzJ7zssjjcbHdKUsMhrZBZN3gPqtcR630q5pM0fVTs"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/евгений-брума-568131b5" class="entity-path primary-details"
                            data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Евгений Брума
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    Head of Training &amp; Development department Uniqlo Russia
                                </span>
                            </div>


                        </a>


                        <span data-memberid="409393376" data-vanityname="евгений-брума-568131b5">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAABhm2OABecxnxitd3s4YTyf2TlFwec9ptJY"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>















            <div class="flex-entity-lockup  mercado-enabled ">
                <a href="/in/kimvadim" class="entity-meta image-path  entity-img-large"
                    aria-label="{:entityLabel}{:entityLabel}, Graphic" data-control-key="profile_image">

                    <img class="person-entity-medium entity-img-large"
                        data-delayed-url="https://media.licdn.com/dms/image/D4E03AQE5IDct9p2c6w/profile-displayphoto-shrink_100_100/0/1670577864240?e=1686787200&amp;v=beta&amp;t=UmKYz0rHKsvJSJEU1bQRhtJ5vk0hYnNHBS-Hg2ffYHE"
                        data-delayed-alt="Photo" aria-hidden="true">

                </a>

                <div class="entity-content no-close-btn">
                    <div class="flex-wrapper">
                        <a href="/in/kimvadim" class="entity-path primary-details" data-control-key="primary_details">

                            <!---->
                            <div class="body-medium-bold name">
                                <span dir="ltr">
                                    Vadim Kim
                                </span>
                                <span class="distance body-small-light">1st</span>
                                <!---->
                            </div>
                            <div class="body-small headline truncate-line">
                                <span dir="ltr">
                                    Store Manager – UNIQLO
                                </span>
                            </div>


                        </a>


                        <span data-memberid="1050416878" data-vanityname="kimvadim">

                            <a href="https://www.linkedin.com/messaging/compose/?recipient=ACoAAD6cFu4Bh0_6FXiSkqCNOnOrbcSo2-HQkA0"
                                class="round-link-btn component-theme small cta-button" aria-label="Message">
                                <div class="round-link-btn__wrapper btn-component secondary muted ">
                                    <li-icon class="round-link-btn__icn" category="system-icons"
                                        type="send-privately-small"></li-icon>
                                </div>
                            </a>

                        </span>


                    </div>






                </div>
                <!---->
            </div>


        </div>











        <div class="block-profile-container hidden" role="dialog">
            <div class="profile-desc">
                <i class="person-entity-small ghost member-photo-block" role="presentation" aria-hidden="true"
                    data-ghost-image="person-2"></i>
                <span class="extra-large-inverse">Liudmila</span>
            </div>
            <p class="block-message large">Are you sure you want to block Liudmila?</p>
            <p class="block-description medium">You will no longer be connected (if you were before), or have
                endorsements or recommendations from this person. You will also no longer see any suggestions to
                interact with each other.</p>
            <button class="action block-profile-btn">Block</button>
            <button class="action cancel-block-btn">Cancel</button>
        </div>







        <div class="view-more overlay hidden" role="dialog">
            <ul class="options-list">
                <li class="profile-action-block">
                    <button class="medium">
                        <li-icon category="ui" class="icon" type="flag-large"></li-icon>
                        Block
                    </button>
                </li>
                <!---->
            </ul>
        </div>

































        <div id="invitation-exceeds-info-modal" class="dialog-modal overlay hidden" role="dialog"
            aria-labelledby="invitation-exceeds-info-modal-heading-label"
            aria-describedby="invitation-exceeds-info-modal-label" data-primary-action-label="OK"
            data-secondary-action-label="Cancel">
            <div class="dialog-modal-container medium">
                <div class="dialog-header">
                    <h2 class="label heading-large" id="invitation-exceeds-info-modal-heading-label">You are out of
                        invitations</h2>
                    <!---->
                </div>
                <div class="dialog-content body-medium" id="invitation-exceeds-info-modal-label">

                    We encourage sending fewer, more thoughtful invitations to people you know to keep LinkedIn a
                    trusted community.
                    <span class="custom-action-panel">
                        <a href="/help/linkedin/answer/4800" target="_blank" class="close-modal large-semibold">Learn
                            more</a>

                        <button
                            class="rect-btn component-theme rect-btn_left rect-btn_tertiary  rect-btn_small ripple close-modal  js-rect-btn"
                            type="button">
                            <span class="rect-btn__cntnt-wrapper">
                                <!----> <span class="rect-btn__label" aria-hidden="true">
                                    Got it
                                </span>
                                <span class="visually-hidden">
                                    Got it
                                </span>
                            </span>
                        </button>

                    </span>

                </div>
                <div class="dialog-actions ">

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple secondary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Cancel
                            </span>
                            <span class="visually-hidden">
                                Cancel
                            </span>
                        </span>
                    </button>


                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple primary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                OK
                            </span>
                            <span class="visually-hidden">
                                OK
                            </span>
                        </span>
                    </button>

                </div>
            </div>
        </div>












        <div class="hidden" id="verify-email-prompt">
            <div class="half-page-modal center">


                <h1 class="extra-large-semibold">Verify Email</h1>


                <div class="prompt large">
                    Please confirm your email address to send invites.
                </div>


                <div class="actions-container verify-link-container verify-email-container">
                    <button class="verify-email-resend-link" data-link-type="resendLink">Resend</button>
                    <span class="verify-email-sent-msg hidden medium">
                        <li-icon class="check-icon" category="system-icons" type="check-small"></li-icon>Sent
                    </span> | <a class="email-edit-link medium link">Edit email</a>
                </div>

            </div>
            <div class="overlay" id="verify-email-prompt-overlay"></div>
        </div>













        <div class="hidden" id="push-notification-prompt">
            <div class="half-page-modal center">
                <div class="push-notification-illustration"></div>
                <h1 class="extra-large-semibold">
                    Stay informed!
                </h1>
                <div class="prompt large" id="prompt_text">
                    Get notified when Liudmila accepts your connection invite and for other alerts
                    <!----><!----><!----><!---->
                </div>
                <div class="actions-container">

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_tertiary  rect-btn_small ripple js-action  js-rect-btn"
                        data-push-action-type="later" data-control-name="mwlite_push_notification_later" type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Not now
                            </span>
                            <span class="visually-hidden">
                                Not now
                            </span>
                        </span>
                    </button>


                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn  rect-btn_small ripple js-action  js-rect-btn"
                        size="small" data-push-action-type="enable" data-control-name="mwlite_push_notification_yes"
                        type="primary">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Continue
                            </span>
                            <span class="visually-hidden">
                                Continue
                            </span>
                        </span>
                    </button>

                </div>
            </div>
            <div id="push-notification-overlay" class="overlay"></div>
        </div>






        <div id="image-modal" class="hidden" data-image-viewer-action="main-container">
            <button class="modal-header" data-image-viewer-action="close-gallery">
                <span class="a11y-text">Close image</span>
                <li-icon class="cancel-icon close-button icon-colored" title="cancel" aria-hidden="true"
                    category="system-icons" type="close-medium"></li-icon>
            </button>

            <section class="image-container" data-image-viewer-action="image-section">
                <img class="main-image center" alt="Image" data-image-viewer-action="main-image">
            </section>

            <section class="detail-section" data-image-viewer-action="detail-section" tabindex="0">

                <div class="text-wrapper attachment-details">
                    <p class="attachment-title medium-semibold-inverse single-line"></p>
                    <p class="attachment-summary medium-dark-inverse">
                        <span class="attachment-summary-text"></span>
                        <a class="see-more more medium-semibold">…more</a>
                    </p>
                </div>
                <a class="clickable-action-section" href="/mwlite/me/add/photo">
                    <div class="action-section">
                        <li-icon class="camera-icon icon-on-dark" category="system-icons" type="camera-small"></li-icon>
                        Edit
                    </div>
                </a>

            </section>
        </div>












        <div class="social-share-modal overlay hidden">
            <div class="social-share-menu">
                <div id="social-share-menu-box">
                    <h3 class="share-headline large-semibold">Share to</h3>
                    <ul class="menu-list medium-light">
                        <li>
                            <span class="copy-action" data-copy-text="https://www.linkedin.com/in/liudmilashurupova"
                                data-social-share-action="share-copy-clipboard">

                                <button
                                    class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple medium-light copy-to-clipboard-button  js-rect-btn"
                                    type="button">
                                    <span class="rect-btn__cntnt-wrapper">
                                        <li-icon class="rect-btn__icn" category="system-icons"
                                            type="document-copy-medium"></li-icon>
                                        <span class="rect-btn__label" aria-hidden="true">
                                            Copy to clipboard
                                        </span>
                                        <span class="visually-hidden">
                                            Copy to clipboard
                                        </span>
                                    </span>
                                </button>

                            </span>
                        </li>
                        <li>
                            <a class="social-share-action fb-share-action"
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fliudmilashurupova&amp;title=Checkout+Liudmila+Shurupova%E2%80%99s+profile+on+LinkedIn"
                                target="_blank" data-social-share-action="share-fb-intent">
                                <li-icon category="social-icons" type="facebook-solid"></li-icon>
                                <span>Facebook</span>
                            </a>
                        </li>

                        <li>
                            <a class="social-share-action twitter-share-action"
                                href="https://www.twitter.com/intent/tweet?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fliudmilashurupova&amp;text=Checkout+Liudmila+Shurupova%E2%80%99s+profile+on+LinkedIn"
                                target="_blank" data-social-share-action="share-twitter-intent">
                                <li-icon category="social-icons" type="twitter-solid"></li-icon>
                                <span>Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <template id="toast-card-action-template-copy-to-clipboard">




            <div class="toast-msg flex-entity-lockup">

                <section class="copy-text-success copy-text-status">
                    <li-icon category="system-icons" class="toast-icon success" type="signal-success-medium"></li-icon>
                    <p class="toast-txt">Copied to clipboard
                    </p>

                    <button
                        class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                        type="button">
                        <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                        <span class="visually-hidden">
                            Click to dismiss the toast
                        </span>
                    </button>


                </section>
                <section class="copy-text-error copy-text-status">
                    <li-icon category="system-icons" class="toast-icon error" type="signal-error-medium"></li-icon>

                    <p class="toast-txt">Error copying to clipboard, try again
                    </p>

                    <button
                        class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                        type="button">
                        <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                        <span class="visually-hidden">
                            Click to dismiss the toast
                        </span>
                    </button>

                </section>


            </div>

        </template>

        <code id="isShareSupportedInApp" style="display: none"><!--false--></code>
        <code id="isSocialShareRestrictionEnabled" style="display: none"><!--false--></code>


        <!---->
        <code id="memberId" style="display: none"><!--279086145--></code>

        <code id="nonIterableProfileId" style="display: none"><!--"ACoAABCihEEBB5RQtyz9wlrmsfnZcNIAgrwqcP4"--></code>

        <code id="vanityName" style="display: none"><!--"liudmilashurupova"--></code>

        <code id="hasPushPermission" style="display: none"><!--true--></code>

        <code id="cooloffConfig"
            style="display: none"><!--"{\"feed\":{\"cooloffPeriods\":[\"0\",\"5\",\"10\",\"15\"],\"laterCount\":\"fc\",\"timestamp\":\"ft\"},\"jobs\":{\"cooloffPeriods\":[\"0\",\"2\",\"4\",\"8\",\"15\"],\"laterCount\":\"jc\",\"timestamp\":\"jt\"},\"profile\":{\"cooloffPeriods\":[\"0\",\"2\",\"4\",\"8\",\"15\"],\"laterCount\":\"pc\",\"timestamp\":\"pt\"},\"myNetwork\":{\"cooloffPeriods\":[\"0\",\"2\",\"4\",\"8\",\"15\"],\"laterCount\":\"mnc\",\"timestamp\":\"mnt\"},\"messaging\":{\"cooloffPeriods\":[\"0\",\"2\",\"4\",\"8\",\"15\"],\"laterCount\":\"mc\",\"timestamp\":\"mt\"}}"--></code>




        <div id="document-modal" class="hidden" data-document-viewer-action="main-container">
            <span class="close-button" data-document-viewer-action="close-document">

                <button
                    class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_medium ripple modal-header js-round-btn"
                    type="button">
                    <li-icon class="round-btn__icn" category="ui" type="cancel-large"></li-icon>
                    <span class="visually-hidden">
                        Close document
                    </span>
                </button>

            </span>

            <section class="main-document">



                <!---->
                <div class="document-container " style="padding-top: %;">
                    <div class="document-loading">
                        <div role="presentation">
                            <li-icon category="ui" class="blue" data-inline-svg="true" type="loader-small">

                                <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                <svg id="loader" x="50%" y="50%" width="60px" height="60px" viewbox="0 0 60 60">
                                    <g class="small-icon"
                                        style="fill-opacity: 1;-webkit-transform: translate(15px, 15px) scale(.5);transform: translate(15px, 15px) scale(.5);">
                                        <path opacity="1"
                                            d="M30.1,16.1L30.1,16.1c-0.6,0-1-0.5-1-1V1c0-0.6,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1v14.1C31.1,15.7,30.6,16.1,30.1,16.1z">
                                        </path>
                                        <path opacity="0.85"
                                            d="M23.1,18.1L23.1,18.1c-0.5,0.3-1.1,0.1-1.4-0.4L14.5,5.6c-0.3-0.5-0.2-1.1,0.4-1.4l0,0C15.4,3.9,16,4,16.3,4.6l7.2,12.1C23.8,17.2,23.6,17.8,23.1,18.1z">
                                        </path>
                                        <path opacity="0.77"
                                            d="M17.9,23.1L17.9,23.1c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7c-0.5-0.3-0.7-0.9-0.4-1.4l0,0c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7C18,22,18.2,22.7,17.9,23.1z">
                                        </path>
                                        <path opacity="0.69"
                                            d="M16.1,30.1L16.1,30.1c0,0.6-0.5,1-1,1L1,31.2c-0.6,0-1-0.5-1-1l0,0c0-0.6,0.5-1,1-1l14.1-0.1C15.7,29.1,16.1,29.5,16.1,30.1z">
                                        </path>
                                        <path opacity="0.61"
                                            d="M18,36.9L18,36.9c0.3,0.5,0.2,1.1-0.4,1.4L5.5,45.6c-0.5,0.3-1.1,0.2-1.4-0.4l0,0c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3C17.1,36.2,17.7,36.4,18,36.9z">
                                        </path>
                                        <path opacity="0.53"
                                            d="M23.3,42.1L23.3,42.1c0.5,0.3,0.6,0.9,0.4,1.4l-7.3,12.1c-0.3,0.5-0.9,0.6-1.4,0.4l0,0c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1C22.1,41.9,22.8,41.8,23.3,42.1z">
                                        </path>
                                        <path opacity="0.45"
                                            d="M30.1,43.9L30.1,43.9c0.6,0,1,0.5,1,1V59c0,0.6-0.5,1-1,1l0,0c-0.6,0-1-0.5-1-1V44.9C29,44.4,29.5,43.9,30.1,43.9z">
                                        </path>
                                        <path opacity="0.37"
                                            d="M37,41.9L37,41.9c0.5-0.3,1.1-0.2,1.4,0.4l7.2,12.1c0.3,0.5,0.2,1.1-0.4,1.4l0,0c-0.5,0.3-1.1,0.2-1.4-0.4l-7.2-12.1C36.4,42.8,36.6,42.2,37,41.9z">
                                        </path>
                                        <path opacity="0.29"
                                            d="M42.2,36.8L42.2,36.8c0.3-0.5,0.9-0.7,1.4-0.4l12.2,7c0.5,0.3,0.7,0.9,0.4,1.4l0,0c-0.3,0.5-0.9,0.7-1.4,0.4l-12.2-7C42.1,38,41.9,37.4,42.2,36.8z">
                                        </path>
                                        <path opacity="0.21"
                                            d="M44,29.9L44,29.9c0-0.6,0.5-1,1-1h14.1c0.6,0,1,0.5,1,1l0,0c0,0.6-0.5,1-1,1L45,31C44.4,31,44,30.5,44,29.9z">
                                        </path>
                                        <path opacity="0.13"
                                            d="M42.1,23.1L42.1,23.1c-0.3-0.5-0.2-1.1,0.4-1.4l12.1-7.3c0.5-0.3,1.1-0.2,1.4,0.4l0,0c0.3,0.4,0.1,1.1-0.4,1.3l-12.1,7.3C43.1,23.7,42.4,23.6,42.1,23.1z">
                                        </path>
                                        <path opacity="0.05"
                                            d="M36.9,17.9L36.9,17.9c-0.5-0.3-0.6-0.9-0.4-1.4l7.3-12.1c0.3-0.5,0.9-0.6,1.4-0.4l0,0c0.5,0.3,0.6,0.9,0.4,1.4l-7.4,12.2C38,18.1,37.3,18.2,36.9,17.9z">
                                        </path>
                                    </g>
                                </svg>


                            </li-icon>
                            <div class="medium-light">Loading document…</div>
                        </div>
                    </div>
                    <div class="document-iframe-container hidden"></div>
                </div>


            </section>

            <section class="detail-section" data-document-viewer-action="detail-section" tabindex="0">

                <div class="text-wrapper attachment-details">
                    <p class="attachment-title medium-semibold-inverse single-line"></p>
                    <p class="attachment-summary medium-dark-inverse">
                        <span class="attachment-summary-text" tabindex="0">
                        </span>
                        <span aria-hidden="true">
                            <button class="medium-semibold expand-collapse-text see-more" aria-expanded="false">
                                …see more
                            </button>
                            <button class="medium-semibold expand-collapse-text see-less" aria-expanded="true">
                                see less
                            </button>
                        </span>
                    </p>
                </div>

            </section>
        </div>


        <code id="documentPlayerConfigs"
            style="display: none"><!--{"a11y":{"toolbarA11y":{"zoomInButtonA11yControlText":"Zoom in","zoomOutButtonA11yControlText":"Zoom out","fullscreenOnButtonA11yControlText":"Enter full screen. An accessible version of the document is available in full screen mode."},"accessibilityMode":{"embed":"Accessible PDF document"},"pagination":{"paginationValue":"Current page","paginationLength":"Total pages"},"sidepanelLeft":{"navButton":"Go to previous page of document"},"sidepanelRight":{"navButton":"Go to next page of document"},"topbar":{"downloadButton":"Download document","cancelButton":"Exit full screen"}},"playerUrl":"https://media.licdn.com/embeds/native-document.html","i18n":{"virusScan":{"dirtyTitle":"This document is not safe","timeoutSubtitle":"We were unable to scan this document for viruses. Would you still like to proceed?","progressDescriptionText":"Scanning for viruses…","dirtySubtitle":"We detected a virus in this document that could harm your device.","downloadButtonText":"Download","cleanProgressDescriptionText":"Ready to download","timeoutTitle":"Can’t scan this document for viruses","forceProceedButtonText":"Proceed anyways","cancelButtonText":"Cancel","skipButtonText":"Skip"},"topbar":{"accessibilityButtonText":"Accessibility mode"}}}--></code>

        <code id="lixShowFuseLimitError" style="display: none"><!--true--></code>
        <code id="gdpr_notice_self_visible_fields"
            style="display: none"><!--"Control what appears on your profile and if your network is notified of changes you make."--></code>
        <code id="gdpr_notice_self_profile_visibility"
            style="display: none"><!--"Control how your profile appears to viewers who haven’t signed in."--></code>
        <code id="gdpr_notice_non_self"
            style="display: none"><!--"Control if other members will be able to see that you’ve visited their profile."--></code>
        <code id="isSelfProfile" style="display: none"><!--true--></code>
        <code id="gdpr_notice_edit_profile_image"
            style="display: none"><!--"We will keep your original photo in case you want to make changes"--></code>
        <code id="isHalfPageUpsellDesignLixEnabled" style="display: none"><!--true--></code>
        <code id="isProfileViewPagePemTrackingEnabled" style="display: none"><!--true--></code>
        <code id="isProfileSemaphoreRedesignEnabled" style="display: none"><!--true--></code>
        <code id="isJobSeeker" style="display: none"><!--false--></code>



        <code id="selfProfilePath" style="display: none"><!--"/mwlite/in/liudmilashurupova"--></code>
        <code id="selfProfileImageUrl"
            style="display: none"><!--"https://media.licdn.com/dms/image/C4E03AQHm8X2evymUvw/profile-displayphoto-shrink_100_100/0/1655550171411?e=1686787200&v=beta&t=UhA5Q7gWAa2u_mzRy7HcLu3w3Wzz3PZD8nPK657Y34A"--></code>





























        <!----> <code id="maxImagesUploadInShareCount" style="display: none"><!--9--></code>
        <code id="i18n_error_msg_image_format"
            style="display: none"><!--"Image format not supported. Supported file formats include PNG, JPEG and JPG"--></code>
        <code id="i18n_file_load_error" style="display: none"><!--"Loading failed. Please try again."--></code>
        <code id="maxImagesInPreviewCount" style="display: none"><!--5--></code>
        <code id="isShareModalExperienceEnabled" style="display: none"><!--true--></code>
        <code id="isMentionsEnabled" style="display: none"><!--true--></code>
        <!----> <code id="loadingDescription" style="display: none"><!--"Loading Suggestions"--></code>
        <code id="loadedDescription" style="display: none"><!--"Loaded Suggestions"--></code>


        <div class="modal-spinner full-page-spinner" data-spinner-state="hidden">
            <div class="spinner-box" data-content="spinner"><svg class="circle-loader" width="32" height="32"
                    version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="11"></circle>
                </svg></div>
        </div>





























        <div id="discard-post-modal" class="dialog-modal overlay hidden" role="dialog"
            aria-describedby="discard-post-modal-label" data-primary-action-label="Discard"
            data-secondary-action-label="Cancel">
            <div class="dialog-modal-container medium">
                <!---->
                <div class="dialog-content body-medium" id="discard-post-modal-label">
                    Would you like to discard current post?
                </div>
                <div class="dialog-actions ">

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple secondary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Cancel
                            </span>
                            <span class="visually-hidden">
                                Cancel
                            </span>
                        </span>
                    </button>


                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple primary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Discard
                            </span>
                            <span class="visually-hidden">
                                Discard
                            </span>
                        </span>
                    </button>

                </div>
            </div>
        </div>
































        <div id="max-images-prompt-modal" class="dialog-modal overlay hidden" role="dialog"
            aria-describedby="max-images-prompt-modal-label" data-primary-action-label="Edit selection"
            data-secondary-action-label="OK">
            <div class="dialog-modal-container medium">
                <!---->
                <div class="dialog-content body-medium" id="max-images-prompt-modal-label">
                    You can upload a maximum of 9 photos
                </div>
                <div class="dialog-actions ">

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple secondary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                OK
                            </span>
                            <span class="visually-hidden">
                                OK
                            </span>
                        </span>
                    </button>


                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple primary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Edit selection
                            </span>
                            <span class="visually-hidden">
                                Edit selection
                            </span>
                        </span>
                    </button>

                </div>
            </div>
        </div>
















        <div id="visibility-settings-modal" class="hidden" role="dialog" tabindex="-1">
            <div class="modal-header">
                <header class="full-page-header">
                    <div id="visibility-header-back">
                        <button class="close-button">
                            <li-icon class="icon collapsed-icon" title="back" category="system-icons"
                                type="arrow-left-medium"></li-icon>
                        </button>
                    </div>
                    <div class="header-content">
                        <h1 class="heading-large">
                            Visibility settings
                        </h1>
                    </div>
                </header>
            </div>
            <div class="modal-content">
                <ul class="settings-list-wrapper">
                    <li>
                        <h3 class="settings-heading large-semibold">Share with</h3>
                        <ul class="share-with-items settings-list">
                            <li tabindex="0">
                                <input class="hidden" name="share-with" id="share-with-public" data-item-type="public"
                                    value="public" checked type="radio">
                                <label class="visibility-label medium-semibold" for="share-with-public"
                                    data-control-action="visibility-public">
                                    <li-icon class="globe-icon" category="system-icons"
                                        type="globe-americas-medium"></li-icon>
                                    <div class="share-group">
                                        <span class="settings-type">Public</span>
                                        <li-icon class="icon-colored" category="system-icons"
                                            type="check-medium"></li-icon>
                                    </div>
                                </label>
                            </li>
                            <li tabindex="0">
                                <input class="hidden" name="share-with" id="share-with-network" data-item-type="network"
                                    value="network" type="radio">
                                <label class="visibility-label medium-semibold" for="share-with-network"
                                    data-control-action="visibility-network">
                                    <li-icon class="people-icon" category="system-icons" type="people-medium"></li-icon>
                                    <div class="share-group">
                                        <span class="settings-type">Network</span>
                                        <li-icon class="icon-colored" category="system-icons"
                                            type="check-medium"></li-icon>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="large-semibold settings-heading">Comments</h3>
                        <ul class="comments-visibility-items settings-list">
                            <li tabindex="0">
                                <input class="hidden" name="comment-setting" id="comments-enabled" value="allow" checked
                                    type="radio">
                                <label class="visibility-label medium-semibold" for="comments-enabled"
                                    data-control-action="enable-comments">
                                    <li-icon class="speech-bubble-icon" category="system-icons"
                                        type="comment-medium"></li-icon>
                                    <div class="share-group">
                                        <span class="settings-type">Allow comments on this post</span>
                                        <li-icon class="icon-colored" category="system-icons"
                                            type="check-medium"></li-icon>
                                    </div>
                                </label>
                            </li>
                            <li tabindex="0">
                                <input class="hidden" name="comment-setting" id="comments-disabled" value="disable"
                                    type="radio">
                                <label class="visibility-label medium-semibold" for="comments-disabled"
                                    data-control-action="disable-comments">
                                    <li-icon category="system-icons" type="comment-off-medium"></li-icon>
                                    <div class="share-group">
                                        <span class="settings-type">Disable comments on this post</span>
                                        <li-icon class="icon-colored" category="system-icons"
                                            type="check-medium"></li-icon>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p class="medium change-setting-later">You can change this setting later</p>
            </div>
        </div>


























        <div id="retry-upload-modal" class="dialog-modal overlay hidden" role="dialog"
            aria-describedby="retry-upload-modal-label" data-primary-action-label="Retry"
            data-secondary-action-label="Cancel">
            <div class="dialog-modal-container medium">
                <!---->
                <div class="dialog-content body-medium" id="retry-upload-modal-label">
                    Photo upload failed.
                </div>
                <div class="dialog-actions ">

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple secondary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Cancel
                            </span>
                            <span class="visually-hidden">
                                Cancel
                            </span>
                        </span>
                    </button>


                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_muted_tertiary rect-btn_muted rect-btn_large ripple primary-action  js-rect-btn"
                        type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Retry
                            </span>
                            <span class="visually-hidden">
                                Retry
                            </span>
                        </span>
                    </button>

                </div>
            </div>
        </div>


        <!---->
        <div id="share-modal" class="feed-action hidden" data-feed-action="main-container">
            <header class="full-page-header-share">
                <div class="header-icon">
                    <button class="close-button">
                        <span class="a11y-text">Close share</span>
                        <li-icon class="cancel-icon" title="cancel" category="system-icons"
                            type="close-medium"></li-icon>
                    </button>
                </div>
                <div class="header-content">
                    <h1 class="header-content-text heading-large">Share</h1>
                </div>
                <span data-action="post" class="modal-action post-button-wrapper">

                    <button
                        class="rect-btn component-theme rect-btn_left rect-btn_inverse_tertiary rect-btn_inverse rect-btn_regular ripple post-button  js-rect-btn"
                        data-litms-tracking-control-name="post" type="button">
                        <span class="rect-btn__cntnt-wrapper">
                            <!----> <span class="rect-btn__label" aria-hidden="true">
                                Post
                            </span>
                            <span class="visually-hidden">
                                Post
                            </span>
                        </span>
                    </button>

                </span>
            </header>

            <div class="modal-content">
                <div class="flex-entity-lockup">
                    <figure class="entity-meta">

                        <img class="profile-image person-entity-small person-entity"
                            data-delayed-url="https://media.licdn.com/dms/image/C4E03AQHm8X2evymUvw/profile-displayphoto-shrink_100_100/0/1655550171411?e=1686787200&amp;v=beta&amp;t=UhA5Q7gWAa2u_mzRy7HcLu3w3Wzz3PZD8nPK657Y34A"
                            alt="Liudmila Shurupova">
                    </figure>
                    <dl class="entity-content overflow-hidden">
                        <dt class="medium-dark-semibold single-line entity-name">
                            <span dir="ltr">Liudmila Shurupova</span>

                            <div class="post-settings-wrapper" role="button" tabindex="0" data-post-visibility="public">
                                <p class="small post-settings public"
                                    aria-label="Current visibility setting is public. Open visibility settings">
                                    <li-icon class="globe-icon" category="system-icons"
                                        type="globe-americas-small"></li-icon>
                                    <span id="visibility-type">Public</span>
                                    <span class="down-arrow"></span>
                                </p>
                                <p class="small post-settings network"
                                    aria-label="Current visibility setting is network. Open visibility settings">
                                    <li-icon class="people-icon" category="system-icons" type="people-small"></li-icon>
                                    <span id="visibility-type">Network</span>
                                    <span class="down-arrow"></span>
                                </p>
                                <p class="small post-settings group" data-item-id="urn"
                                    aria-label="Current visibility setting is set to group {:group_displayName}. Open visibility settings">
                                    <li-icon class="group-icon" category="system-icons" type="group-small"></li-icon>
                                    <span id="visibility-type"></span>
                                    <span class="down-arrow"></span>
                                </p>
                            </div>

                        </dt>
                    </dl>
                </div>

                <div class="textarea large" contenteditable="true"
                    data-placeholder="Share your thoughts. Add photos or hashtags."
                    placeholder="Share your thoughts. Add photos or hashtags."></div>
                <section class="image-preview-wrapper" data-image-load-state="empty">

                    <button
                        class="round-btn component-theme round-btn_primary round-btn_muted round-btn_regular ripple remove-image-preview js-round-btn"
                        type="button">
                        <li-icon class="round-btn__icn" category="ui" type="cancel-large"></li-icon>
                        <span class="visually-hidden">
                            Remove photos
                        </span>
                    </button>

                    <ul id="image-preview" class="multiple-images-preview-container" aria-hidden="true"></ul>
                </section>

                <section class="reshare-section"></section>

                <section class="share-feed-item">




                    <section class="preview-link">
                        <a class="post-link" id="post-link" target="_blank">
                            <img id="post-image" alt="feed item image" class="post-image-share-preview hidden">
                            <div class="post-detail-container">
                                <span class="post-title medium-dark-semibold"></span>
                                <span id="post-provider-info" class="sub-text small"></span>
                            </div>
                        </a>
                    </section>


                </section>
                <div class="share-actions">
                    <span data-action="add-image" class="add-image modal-action" id="image-upload-label">

                        <button
                            class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_regular ripple camera-icon image-upload-btn js-round-btn"
                            type="button">
                            <li-icon class="round-btn__icn" category="system-icons" type="camera-medium"></li-icon>
                            <span class="visually-hidden">
                                Add photo
                            </span>
                        </button>

                        <input multiple id="image-upload" class="hidden" accept="image/*" type="file">
                    </span>
                    <span data-action="add-mentions" class="add-mention modal-action"
                        data-a11y-text-after-activation="Mention activated, more suggestions will be provided as you type">

                        <button
                            class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_regular ripple  js-round-btn"
                            type="button">
                            <li-icon class="round-btn__icn" category="system-icons" type="mention-medium"></li-icon>
                            <span class="visually-hidden">
                                Add a mention
                            </span>
                        </button>

                    </span>
                    <span data-action="add-hashtag-v2" class="add-hashtag modal-action"
                        data-a11y-text-after-activation="Hashtag activated, more suggestions will be provided as you type">

                        <button
                            class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_regular ripple  js-round-btn"
                            type="button">
                            <li-icon class="round-btn__icn" category="system-icons" type="hashtag-medium"></li-icon>
                            <span class="visually-hidden">
                                Add a hashtag
                            </span>
                        </button>

                    </span>
                </div>
                <!---->
            </div>
            <div class="progress-overlay" data-progress-overlay-state="hidden">
                <div class="progress-status-wrapper">
                    <h5 class="medium-semibold upload-progress-header" data-post-status>
                        <span class="creating-post">Creating your post</span>
                        <span class="uploading-photos">Uploading photos</span>
                    </h5>

                    <p id="progressVal" class="large">0%</p>
                    <progress class="upload-progress" value="0" max="100"></progress>
                </div>
            </div>
            <div class="recommendations hidden"></div>
        </div>

        <!----> <code id="gdpr_notice_share"
            style="display: none"><!--"Your shares are used to improve what we show to you."--></code>

        <code id="postFailureMessage"
            style="display: none"><!--"Something went wrong in sharing your post. Please try again"--></code>
        <template id="share-modal-toast-error-template">




            <div class="toast-msg flex-entity-lockup">
                <li-icon category="system-icons" class="toast-icon failure" type="signal-error-medium"></li-icon>
                <p class="toast-txt">
                    <!---->
                    <!---->
                </p>


                <button
                    class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                    type="button">
                    <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                    <span class="visually-hidden">
                        Click to dismiss the toast
                    </span>
                </button>



            </div>

        </template>

        <template id="share-modal-toast-success-template">




            <div class="toast-msg flex-entity-lockup">
                <li-icon category="system-icons" class="toast-icon success" type="signal-success-medium"></li-icon>
                <p class="toast-txt">
                    Your share is posted successfully.
                    <a class="cta-link">View post</a>
                </p>


                <button
                    class="round-btn component-theme round-btn_muted_tertiary round-btn_muted round-btn_small ripple dismiss-action js-round-btn"
                    type="button">
                    <li-icon class="round-btn__icn" type="cancel-small"></li-icon>
                    <span class="visually-hidden">
                        Click to dismiss the toast
                    </span>
                </button>



            </div>

        </template>





        <div class="gdpr-notice flex-entity-lockup hide hidden" role="alert">
            <div class="entity-meta">
                <li-icon class="icon" category="system-icons" type="shield-medium"></li-icon>
            </div>
            <div class="entity-content medium">
                <span class="notice-msg"></span>
                <a class="settings-link" href></a>
            </div>
            <div class="dismiss">
                <button>
                    <li-icon a11y-text="Dismiss" category="system-icons" type="close-small"></li-icon>
                </button>
            </div>
        </div>






        <div class="offline-toast hidden" id="offlineToast" aria-live="assertive" aria-hidden="true">
            <span class="message">No Internet connection</span>
            <button class="dismiss medium-semibold">Dismiss</button>
        </div>

    </div >
    <code id="gdprViewSettingsLabel" style="display: none"><!--"View Settings"--></code>
    <code id="isPveOnDomContentLoadEnabled" style="display: none"><!--false--></code>

    <code id="isBoltCedexisBeaconEnabled" style="display: none"><!--true--></code>
    <code id="isGlobalCedexisBeaconEnabled" style="display: none"><!--true--></code>
    <code id="isGlobalDyncdnBeaconEnabled" style="display: none"><!--false--></code>
    <code id="isSWCacheEnabled" style="display: none"><!--true--></code>
    <code id="isServiceWorkerBlockListEnabled" style="display: none"><!--true--></code>
    <code id="isAppShellEnabled" style="display: none"><!--false--></code>
    <code id="enableClientSidePVE" style="display: none"><!--true--></code>
    <code id="recentSearchesExpiryTime" style="display: none"><!--300000--></code>
    <code id="isTrackingV2Enabled" style="display: none"><!--true--></code>
    <code id="showGDPRNotice" style="display: none"><!--true--></code>
    <code id="memberUrn" style="display: none"><!--"urn:li:member:279086145"--></code>
    <code id="showOfflineToast" style="display: none"><!--true--></code>
    <code id="isInterceptBackButtonEnabled" style="display: none"><!--true--></code>
    <code id="isATHPVETrackingEnabled" style="display: none"><!--false--></code>
    <code id="showEmailVerificationBanner" style="display: none"><!--true--></code>
    <code id="blurredPlaceholderEnabled" style="display: none"><!--false--></code>
    <code id="isIOSDeepLinkFixEnabled" style="display: none"><!--false--></code>
    <code id="isFetchBasedRetryEnabled" style="display: none"><!--false--></code>
    <code id="isLoadImagesOnDemandEnabled" style="display: none"><!--false--></code>
    <code id="memberProfileId" style="display: none"><!--"ACoAABCihEEBB5RQtyz9wlrmsfnZcNIAgrwqcP4"--></code>
    <!----> <code id="logoutUrl"
        style="display: none"><!--"https://www.linkedin.com/uas/logout?trk=mwlite-signout&csrfToken=ajax%3A6408462083412592724"--></code>



    



    <script src="https://static.licdn.com/sc/h/1ervld8fj76nesl9urn8nsb5b" type="text/javascript"></script>
    <script src="https://static.licdn.com/sc/h/9mymgmp4m5o79lo5fveyajk6z" type="text/javascript"></script>



    <script src="https://static.licdn.com/sc/h/3ptxc5emyk30xgpuc71folqub" type="text/javascript"></script>



    <script src="https://static.licdn.com/sc/h/9g3qa5ltfljbvg2j2822mqs3i" type="text/javascript"></script>
    <!---->

    <div aria-live="polite" class="visually-hidden" id="a11y-alert-container"></div>
    <!---->
`

const $ = cheerio.load(markup);
const name = $(".span.");
console.log(name.text());
