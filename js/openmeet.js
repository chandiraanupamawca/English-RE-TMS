teno = 0
nn = JSON.parse(localStorage.getItem("allc"))

function newm(ac) {
	if (ac == null) {
		ac = "English RE"
	}
	if (teno == 0) {
		teno = 1
		var xhr56783 = new XMLHttpRequest();
		var url2 = baseurl + "/v2/users/" + usid + "/meetings";
		xhr56783.open("POST", url2, true);
		xhr56783.setRequestHeader("Content-Type", "application/json");

		xhr56783.setRequestHeader("Authorization", "Bearer " + tkna);
		xhr56783.onreadystatechange = function () {
			if (xhr56783.readyState === 4 && xhr56783.status === 201) {
				console.log(JSON.parse(xhr56783.response))
				crtd = JSON.parse(xhr56783.response);
				if (ggf != null) {
					console.log(ggf)

					for (i = 0; i < Object.keys(ggf).length; i++) {
						mergeray = mergeray + " | " + ("000" + Object.keys(ggf)[i]).slice(-4)
						console.log(Object.keys(ggf)[i])

						console.log(i)
						/*
      firebase.database().ref(   "zoomid/" + Object.keys(ggf)[i] ).set({
        id : crtd["id"]
    }).then((x)=>{
      st.database().ref( "live/" + Object.keys(ggf)[i]).set({
        id: crtd["id"],
        sts: "Live"
      })

    })
  */


					}
				}
				firebase.database().ref("zoomid/" + cid).set({
					id: crtd["id"]
				})
				zooml = window.open(crtd["start_url"], 'height=0px,width=0px,toolbar=no,menubar=no,scrollbars=no');
				const Toast = Swal.mixin({
					toast: true,
					position: 'bottom-end',
					showConfirmButton: false,
					timer: 8000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener('mouseenter', Swal.stopTimer)
						toast.addEventListener('mouseleave', Swal.resumeTimer)
					}
				})

				Toast.fire({
					icon: 'success',
					title: 'Launching Meeting'
				}).then((result) => {
					zooml.close()
					location.reload()


				})
				telenot("<b>" + "New Meeting " + localStorage.getItem("ctpic") + " is now live on English RE" + "</b>" + "\n" + "Topic: " + crtd["topic"] + "\nClass ID: " + cid + "\n" + "Meeting ID: " + crtd["id"] + "\n" + "Start URL: " + crtd["start_url"] + "\n" + "Timestamp: " + moment().format("YYYY-MM-DD hh:mm a"))

				st.database().ref(   "live/" + cid ).update( {
				  id: crtd["id"],
				  sts: "Live"
				})


			}
		}
		if (mergeray == '') {
			classz = ac + " | " + classname + " | ID: " + ("000" + cid).slice(-4)
		}
		else {
			classz = ac + " | " + classname + " | ID: " + ("000" + cid).slice(-4) + mergeray
			telenot("<b>" + "New Merged Class Started " + "</b>\n Merged to: ClassIDs " + mergeray + "\nHost Class: " + nn[cid]["topic"])


		}
		var data = JSON.stringify({
			"agenda": ac + " | " + classname,
			"default_password": false,
			"duration": 120,
			"password": "EnglishRE",
			"pre_schedule": false,
			"settings": {
				"allow_multiple_devices": false,
				"alternative_hosts_email_notification": false,
				"approval_type": 1,
				"close_registration": false,
				"cn_meeting": false,
				"contact_email": "chandira.anupamawca@gmail.com",
				"contact_name": "Chandira Anupama",
				"email_notification": true,
				"encryption_type": "enhanced_encryption",
				"focus_mode": false,
				"global_dial_in_countries": [
					"US"
				],
				"host_video": false,
				"in_meeting": false,
				"jbh_time": 0,
				"join_before_host": false,

				"meeting_authentication": false,
				"mute_upon_entry": true,
				"participant_video": false,
				"private_meeting": false,
				"registrants_confirmation_email": false,
				"registrants_email_notification": false,
				"registration_type": 1,
				"show_share_button": true,
				"use_pmi": false,
				"waiting_room": false,
				"watermark": false,
				"host_save_video_order": true,
				"alternative_host_update_polls": true
			},
			"start_time": moment().toISOString(),
			"timezone": "Asia/Kolkata",
			"topic": classz,
			"type": 2
		});
		xhr56783.send(data);

	}
}


function openmeet() {

	let timerInterval
	Swal.fire({
		title: 'Preparing Your your meeting',
		html: 'This will close in <b></b> milliseconds.',
		timer: 8000,
		allowOutsideClick: false,
		allowEscapeKey: false,
		timerProgressBar: true,
		didOpen: () => {
			Swal.showLoading()
			const b = Swal.getHtmlContainer().querySelector('b')
			timerInterval = setInterval(() => {
				b.textContent = Swal.getTimerLeft()
			}, 100)
		},
		willClose: () => {
			clearInterval(timerInterval)
		}
	}).then((result) => {
		/* Read more about handling dismissals below */
		if (result.dismiss === Swal.DismissReason.timer) {
			console.log('I was closed by the timer')
		}
	})

	function already(jj) {


		console.log("Meeting ID existing is:" + jj)
		if (jj == null) {
			newm(topicfc);
		}
		else {
			console.log(topicfc)
			var xhr7895411 = new XMLHttpRequest();
			var url2 = baseurl + "/v2/meetings/" + jj;
			xhr7895411.open("GET", url2, true);
			xhr7895411.setRequestHeader("Content-Type", "application/json");
			xhr7895411.setRequestHeader("Authorization", "Bearer " + tkna);
			xhr7895411.onreadystatechange = function () {
				if (xhr7895411.readyState === 4 && xhr7895411.status === 404) {
					newm(topicfc)
				}
				if (xhr7895411.readyState === 4 && xhr7895411.status === 200) {
					console.log(xhr7895411.response)
					if (JSON.parse(xhr7895411.response)["status"] == "started") {
						Swal.fire({
							title: 'Meeting in progress!',
							text: "Do you want to join as the Host",
							icon: 'warning',
							showDenyButton: true,
							confirmButtonColor: '#3085d6',
							denyButtonColor: '#d33',
							confirmButtonText: 'Yes!',
							denyButtonText: 'End Meeting'
						}).then((result) => {


							if (result.isConfirmed) {
								zooml2 = window.open(JSON.parse(xhr7895411.response)["start_url"], 'height=0px,width=0px,toolbar=no,menubar=no,scrollbars=no');
								zooml2.moveTo(0, 0);
								zooml2.blur();
								window.focus();
								const Toast = Swal.mixin({
									toast: true,
									position: 'bottom-end',
									showConfirmButton: false,
									timer: 8000,
									timerProgressBar: true,
									didOpen: (toast) => {
										toast.addEventListener('mouseenter', Swal.stopTimer)
										toast.addEventListener('mouseleave', Swal.resumeTimer)
									}
								})

								Toast.fire({
									icon: 'success',
									title: 'Launching Meeting'
								}).then((result) => {
									zooml2.close()
									location.reload()


								})
								telenot("<b>" + "Meeting Rejoined: " + localStorage.getItem("ctpic") + " is now live on English RE" + "</b>" + "\n" + "Class ID: " + cid + "\n" + "Meeting ID: " + JSON.parse(xhr7895411.response)["id"] + "\n" + "Start URL: " + JSON.parse(xhr7895411.response)["start_url"] + "\n" + "Timestamp: " + moment().format("YYYY-MM-DD hh:mm a"))

							}
							else {
								console.log(result)
								if (result.isDenied) {
									var xhr77862 = new XMLHttpRequest();
									var url2 = baseurl + "/v2/meetings/" + jj + "/status";
									xhr77862.open("PUT", url2, true);
									xhr77862.setRequestHeader("Content-Type", "application/json");
									xhr77862.setRequestHeader("Authorization", "Bearer " + tkna);
									xhr77862.onreadystatechange = function () {
										if (xhr77862.readyState === 4 && xhr77862.status === 404) {
											newm(topicfc)
										}
										if (xhr77862.readyState === 4 && xhr77862.status === 204) {
											console.log(xhr77862.response)
											const Toast = Swal.mixin({
												toast: true,
												position: 'bottom-end',
												showConfirmButton: false,
												timer: 8000,
												timerProgressBar: true,
												didOpen: (toast) => {
													toast.addEventListener('mouseenter', Swal.stopTimer)
													toast.addEventListener('mouseleave', Swal.resumeTimer)
												}
											})

											Toast.fire({
												icon: 'success',
												title: 'Meeting Ended'
											})

											telenot("<b>Force Ended Meeting :" + localStorage.getItem("ctpic") + "</b> \n" + " Class ID: " + cid + "\n" + " Meeting ID: " + JSON.parse(xhr7895411.response)["id"] + "\n Restart URL: " + JSON.parse(xhr7895411.response)["start_url"])
										}
									}
									data = JSON.stringify({
										action: "end"
									})
									xhr77862.send(data);
								}
							}

						})
					}
					else {
						newm(topicfc)
					}

				}
			}
			xhr7895411.send();
			console.log("check log")
		}
	}

	function getidmmmm() {
		console.log("Obtaining Meeting ID")
		var path = "zoomid/" + cid + "/id"
		const preObject69410 = document.getElementById(path);
		// Create References
		const dbRefObject69410 = firebase.database().ref().child(path);

		// Sync object changes
		dbRefObject69410.on('value', snap => already(snap.val()))
	}

	function chk(ax) {
		topicfc = ax


		getidmmmm()
	}

	var path = "meeting-topics/" + cid + "/topic";
	const preObject566 = document.getElementById(path);
	// Create References
	const dbRefObject566 = firebase.database().ref().child(path);

	// Sync object changes
	dbRefObject566.on('value', snap => chk(snap.val()));

};