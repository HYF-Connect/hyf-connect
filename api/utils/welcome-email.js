const welcome = (FirstName) => {
  return `
    <!doctype html>
<html lang="en-US">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Welcome Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {
            text-decoration: underline !important;
        }
    </style>
</head>
<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <a href="https://voxbox.herokuapp.com/" title="logo" target="_blank">
                                <img width="60" src="https://voxbox.herokuapp.com/static/media/logoVox.0a50ddd3.png"
                                    title="logo" alt="logo">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1> Hello ${FirstName}
                                            <h2
                                                style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                                Welcome to HYF-Connet!</h2>
                                            <div
                                                style="display:inline-block; vertical-align:middle; margin:29px 0; border-bottom:1px solid #cecece;"><img src="https://image.freepik.com/free-vector/multicultural-people-standing-together_74855-6583.jpg"alt='together'></div>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                    <h2>Thank you for being part of a community of Hack Your Future Connect!</h2>
                                                    <h3> And for Joining us as we do what we can for a good cause!</h3>
                                                    <p style="text-align: center;word-wrap: break-word;">As a volunteer-based, charitable non-profit organization,
                                                        we gratefully accept volunteers from all backgrounds!</p>
                                            </p>
                                            <a href=#link
                                                style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Visit VoxBox</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>
</html>
        `;
};
module.exports = { welcome };
