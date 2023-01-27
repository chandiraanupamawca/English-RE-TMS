const fs = require("fs");
var progress = require('progress-stream');
const express = require("express");
const multer = require("multer");
const OAuth2Data = require("./credentials.json");
var title, description;
var tags = [];

const { google } = require("googleapis");

const app = express();

const CLIENT_ID = OAuth2Data.web.client_id;
const CLIENT_SECRET = OAuth2Data.web.client_secret;
const REDIRECT_URL = OAuth2Data.web.redirect_uris[0];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
var authed = false;

// If modifying these scopes, delete token.json.
const SCOPES =
  "https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/userinfo.profile";

app.set("view engine", "ejs");

var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./videos");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

var upload = multer({
  storage: Storage,
}).single("file"); //Field name and max count

app.get("/", (req, res) => {
  if (!authed) {
    // Generate an OAuth URL and redirect there
    var url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log(url);
    res.render("index", { url: url });
  } else {
    var oauth2 = google.oauth2({
      auth: oAuth2Client,
      version: "v2",
    });
    oauth2.userinfo.get(function (err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response.data);
        name = response.data.name;
        pic = response.data.picture;
        res.render("success", {
          name: response.data.name,
          pic: response.data.picture,
          success: false,
        });
        Swal.fire(
          'Great!',
          'You linked Google Account to Aduruthuma Successfully',
          'success'
        )
      }
    });
  }
});

function  uploader() {
 
    console.log(selfilepath);

    var str = progress({
      length: stat.size,
      time: 100 /* ms */
  });
   
  str.on('progress', function(progress) {
      console.log(progress);
   
      /*
      {
          percentage: 9.05,
          transferred: 949624,
          length: 10485760,
          remaining: 9536136,
          eta: 42,
          runtime: 3,
          delta: 295396,
          speed: 949624
      }
      */
  });

    title = $$('matname').value;
    description = "Hosted by Aduruthuma LMS";
    console.log(title);
    console.log(description);
    console.log(tags);
    const youtube = google.youtube({ version: "v3", auth: oAuth2Client });
    console.log(youtube)
    youtube.videos.insert(
      {
        resource: {
          // Video title and description
          snippet: {
              title:title,
              description:description,
              tags:tags
          },
          
          status: {
            privacyStatus: "unlisted",
          },
        },
        // This is for the callback function
        part: "snippet,status",

        // Create the readable stream to upload the video
        media: {
          body: fs.createReadStream(selfilepath)
        },
      },
      (err, data) => {
        if(err) throw err
        console.log(data)
        console.log("Done.");
        fs.unlinkSync(selfilepath);
        ytl = data["data"]["id"]
      }
    );
  }



app.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Something went wrong");
    } else {
      console.log(selfilepath);

      var str = progress({
        length: stat.size,
        time: 100 /* ms */
    });
     
    str.on('progress', function(progress) {
        console.log(progress);
     
        /*
        {
            percentage: 9.05,
            transferred: 949624,
            length: 10485760,
            remaining: 9536136,
            eta: 42,
            runtime: 3,
            delta: 295396,
            speed: 949624
        }
        */
    });

      title = $$('matname').value;
      description = "Hosted by Aduruthuma LMS";
      console.log(title);
      console.log(description);
      console.log(tags);
      const youtube = google.youtube({ version: "v3", auth: oAuth2Client });
      console.log(youtube)
      youtube.videos.insert(
        {
          resource: {
            // Video title and description
            snippet: {
                title:title,
                description:description,
                tags:tags
            },
            
            status: {
              privacyStatus: "unlisted",
            },
          },
          // This is for the callback function
          part: "snippet,status",

          // Create the readable stream to upload the video
          media: {
            body: fs.createReadStream(selfilepath)
          },
        },
        (err, data) => {
          if(err) throw err
          console.log(data)
          console.log("Done.");
          fs.unlinkSync(selfilepath);
          res.render("success", { name: name, pic: pic, success: true });
        }
      );
    }
  });
});

app.get("/logout", (req, res) => {
  authed = false;
  res.redirect("/");
});

app.get("/google/callback", function (req, res) {
  const code = req.query.code;
  if (code) {
    // Get an access token based on our OAuth code
    oAuth2Client.getToken(code, function (err, tokens) {
      if (err) {
        console.log("Error authenticating");
        console.log(err);
      } else {
        console.log("Successfully authenticated");
        Swal.close()
        console.log(tokens);
        oAuth2Client.setCredentials(tokens);
        authed = true;
        res.redirect("/");
      }
    });
  }
});

app.listen(5000, () => {
  console.log("App is listening on Port 5000");
});
