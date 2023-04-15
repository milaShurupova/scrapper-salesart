const fetch = require("node-fetch");

const profile = {
    profileId: "",
    title: "",
}

console.log("Hello");

const handle = `brodetskiyveniamin`;
const handle2 = `artem-rudman`;

async function getProfileData(handle) {

await fetch(`https://www.linkedin.com/voyager/api/identity/dash/profiles?q=memberIdentity&memberIdentity=${handle}&decorationId=com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementary-124`, {
    "headers": {
        "accept": "application/vnd.linkedin.normalized+json+2.1",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "csrf-token": "ajax:6408462083412592724",
        "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-li-deco-include-micro-schema": "true",
        "x-li-lang": "en_US",
        "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;a0X0uJAMSa6hl5x2LX/4kw==",
        "x-li-pem-metadata": "Voyager - Profile=profile-top-card-supplementary",
        "x-li-track": "{\"clientVersion\":\"1.12.3285\",\"mpVersion\":\"1.12.3285\",\"osName\":\"web\",\"timezoneOffset\":3,\"timezone\":\"Asia/Jerusalem\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1.25,\"displayWidth\":1920,\"displayHeight\":1080}",
        "x-restli-protocol-version": "2.0.0",
        "cookie": "bcookie=\"v=2&e07c7ee8-8284-46c1-82ab-4bd3d644a2cb\"; bscookie=\"v=1&20220618104228b6281a77-1786-4ea8-8e79-acc13a879827AQHovEyTFeysldu-pTkVSS8e32hyTc6L\"; G_ENABLED_IDPS=google; _gcl_au=1.1.105411489.1655548959; li_rm=AQH4wNZMzxpwHQAAAYF2awnHqLiqm34a2JN4ot-njlzNxtvXcElFr3KwxflOkTOJVqGtr8q0n3KIi0eCHLoy8tT3LRZw8-TCEMW_d-V8l0t6Sqg7v9SvqrvT; li_theme=light; li_theme_set=app; li_sugr=0477d074-883e-4727-beec-89761b022d52; visit=v=1&M; liap=true; JSESSIONID=\"ajax:6408462083412592724\"; _guid=bbfa14cb-bfc5-463a-9c58-5526e5c5a473; mbox=session#6052d42cec794d479f5f0318ae488089#1674981597|PC#6052d42cec794d479f5f0318ae488089.37_0#1690531737; aam_uuid=75439537468657666843738042664861417223; timezone=Asia/Jerusalem; AnalyticsSyncHistory=AQJlxmI1T-9lQgAAAYd6VTh1miHAwJ9w9ZkyXCDuyUYrWXiOl3aVs6D_INB34-TVR53nzTAPfG6C1Ssv5vtC4g; lms_ads=AQGyc2nxfWn7AwAAAYd6VTnOz-tMOfPSL9jLA3laoXdCAScSfe0qC5x3AkhOV8d8fK1L1E5Iaod8YQnyfHmr1cbUcLOrcnhl; lms_analytics=AQGyc2nxfWn7AwAAAYd6VTnOz-tMOfPSL9jLA3laoXdCAScSfe0qC5x3AkhOV8d8fK1L1E5Iaod8YQnyfHmr1cbUcLOrcnhl; gpv_pn=www.linkedin.com%2Flegal%2Fuser-agreement; s_tp=13319; s_tslv=1681385074022; s_ips=771.1999998092651; pushPermState=default; li_theme_set=app; li_at=AQEDARCihEEEyZ7rAAABgXZvbcsAAAGHn3yqyU0Ao-VK3R4EZPf7d-m2BvSaavMDenap5JqDo_KnNmjkzOTKe3gbMVBRT-ZsWvNVlD9O5UXWCQGXOhgV0qZ41_yti1K7eAriRvpWZW72TpvXuKW24neo; lang=v=2&lang=en-us; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19463%7CMCMID%7C75296478104070192233688200443086982348%7CMCAAMLH-1682193903%7C6%7CMCAAMB-1682193903%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1681596303s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C1184372047; UserMatchHistory=AQLj1sUIoOt4qgAAAYeGhlsQGz0MiQlT7Hr2gww-t12CX50lhtG1cbZtdUfiAvgxCrNgweyWDSofQTyUHAKseOSk374Va6emooDZLc_29XFCmHr2a6rMPQrAEf1albqIPB4LKqdd9goJseFt9HwrqyEmjWEPQdkOb7pp0Snwv3ao6JFSZEJJkpT6yLHbQakdUCaQEaLRQGqCL-PAKON9GAgqgAr9amd8sb0Iir7Akm00Q1W-mSHqgxuM307rgGftBDGqnGXua5vY0MwWIPMomOzEGLA-bzdNFHyFFrS2t8MNJEdjS5V7carvfsR8tnG6TuwA6bc; lidc=\"b=VB45:s=V:r=V:a=V:p=V:g=4646:u=160:x=1:i=1681589171:t=1681663606:v=2:sig=AQHvh2iYhE2FXN4z4zXLo2R4G_Ra5bdG\"",
        "Referer": "https://www.linkedin.com/in/brodetskiyveniamin/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
})
    .then(response => response.json())
    .then(jsonData => {

        jsonData.included.forEach(element => {
            if (element.headline) profile.title = element.headline;
        });
        console.log(profile.title);
    })
    .catch(error => {
        console.error(error);
    });
}

getProfileData(handle);
getProfileData(handle2);