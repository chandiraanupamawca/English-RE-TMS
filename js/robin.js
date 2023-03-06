function phb(thz) {
	if ($$(thz).checked) {
		console.log(thz)
		const email = yz["pn"] + "@englishre.xyz"; // Replace with the user's email address
		const url = "https://server-09.englishre.xyz/getuserid"; // Replace with the server URL
		const xhr = new XMLHttpRequest();
		xhr.open("POST", url);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onload = () => {
			if (xhr.status === 200) {
				console.log(xhr.responseText);
				uid = xhr.responseText
				st.database().ref("enroll/" + uid + "/" + cid + "/" + thz).update({
						pay: "ok",
						ts: Math.floor(Date.now() / 1000),
						md: "Teacher",
						fee: clzfeeam.toString(),
						cid: cid,
						cname: classname,
						mid: thz,
						sid: pwd,
						stname: yz["fn"] + " " + yz["ln"],
						tname: localStorage.nm,
						uid: uid

					}).then((mm) => {
						firebase.database().ref("pay/" + cid + "/" + pwd + "/" + thz).update({
							pay: "ok",
							ts: Math.floor(Date.now() / 1000),
							md: "Teacher",
							fee: clzfeeam.toString(),
							cid: cid,
							cname: classname,
							mid: thz,
							sid: pwd,
							stname: yz["fn"] + " " + yz["ln"],
							tname: localStorage.nm,
							uid: uid
						}).then((mm) => {

							telenot("✅ [FREE STUDENT] A new payment for the Student ID: <b>" + "RE" + ("000" + pwd).slice(-4) + "</b> has been done for the month of <b>" + thz + "</b>" + "\nBy " + localStorage.nm)
						})
					})
					.catch((error) => {
						Swal.fire({
							icon: 'error',
							title: 'Error fetching user data!',
							text: error
						})
						console.log('Error fetching user data:', error);
					});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'An Error Occured!',
					text: xhr.statusText
				})
			}
		};
		xhr.onerror = () => {
			console.error(xhr.statusText);
		};
		xhr.send(JSON.stringify({
			email
		}));


	} else {
		console.log(thz + "denroll")
		const email = yz["pn"] + "@englishre.xyz"; // Replace with the user's email address
		const url = "https://server-09.englishre.xyz/getuserid"; // Replace with the server URL
		const xhr = new XMLHttpRequest();
		xhr.open("POST", url);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onload = () => {
			if (xhr.status === 200) {
				console.log(xhr.responseText);
				uid = xhr.responseText
				st.database().ref("enroll/" + uid + "/" + cid + "/" + thz).remove(
          // Remove Data in Directory
					).then((mm) => {
						firebase.database().ref("pay/" + cid + "/" + pwd + "/" + thz).remove(
              // Remove Data in Directory
            ).then((mm) => {
							telenot("🔴 [FREE STUDENT] Cancelled payment for the Student ID: <b>" + "RE" + ("000" + pwd).slice(-4) + "</b> for the month of <b>" + thz + "</b>" + "\nBy " + localStorage.nm)
						})
					})
					.catch((error) => {
						console.log('Error fetching user data:', error);
						alert('Error fetching user data:', error)
					});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'An Error Occured!',
					text: xhr.statusText
				})
			}
		};
		xhr.onerror = () => {
			console.error(xhr.statusText);
		};
		xhr.send(JSON.stringify({
			email
		}));

	}

}

function freestenr(result, xz, password) {
	result = result
	yz = xz
	pwd = password
	Swal.fire({
		icon: 'info',
		title: 'Select the months',
		showCloseButton: true,
		html: '<table id="montable" width="90%" class="float-center"> <tbody>' +
			' <tr><td><input id="01" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">January</label></td></tr>' +
			' <tr><td><input id="02" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">February</label></td></tr>' +
			' <tr><td><input id="03" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">March</label></td></tr>' +
			' <tr><td><input id="04" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">April</label></td></tr>' +
			' <tr><td><input id="05" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">May</label></td></tr>' +
			' <tr><td><input id="06" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">June</label></td></tr>' +
			' <tr><td><input id="07" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">July</label></td></tr>' +
			' <tr><td><input id="08" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">August</label></td></tr>' +
			' <tr><td><input id="09" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">September</label></td></tr>' +
			' <tr><td><input id="10" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">Octomber</label></td></tr>' +
			' <tr><td><input id="11" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">November</label></td></tr>' +
			' <tr><td><input id="12" onchange="phb(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> </td>' +
			' <td><label for="checkbox1" class="form-control float-center">December</label></td></tr>' +
			'</tbody></table>'

	}).then((res) => {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Free student enrollments updated!',
			showConfirmButton: false,
			timer: 1500
		})
	})
}
async function freestx() {
	const {
		value: password
	} = await Swal.fire({
		title: 'Enter the student ID',
		showCancelButton: true,
		input: 'number',
		inputLabel: 'Student ID without RE & leading zeros',
		inputPlaceholder: '0000',
		inputAttributes: {
			maxlength: 4,
			autocapitalize: 'off',
			autocorrect: 'off'
		}
	})

	if (password) {
		function vi(xz) {
			if (xz != null) {
				console.log(xz)
				if (xz["dp"] != null && xz["dp"] != "none") {
					Swal.fire({
						title: "Verify the student",
						html: '<img style="height:100px" class="rounded" src="' + xz["dp"] + '"><br>' +
							'<span style="font-size:30px" class="text-primary fw-bold">' + xz["fn"] + " " + xz["ln"] + ' </span><br><br>' +
							'<div style="text-align:left"><span class="text-primary fw-bold">Phone Number: </span>' +
							'<span >' + xz["pn"] + '<span><br>' +
							'<span class="text-primary fw-bold">Study Year: </span>' +
							'<span >' + xz["yr"] + '<span><br>' +
							'<span class="text-primary fw-bold">WhatsApp Number: </span>' +
							'<span >' + xz["wa"] + '<span><br>' +
							'<span class="text-primary fw-bold">Address: </span>' +
							'<span >' + xz["ad"] + '<span><br>' +
							'<span class="text-primary fw-bold">Birthday: </span>' +
							'<span >' + xz["bd"] + '<span><br>' +
							'<span class="text-primary fw-bold">Email: </span>' +
							'<span >' + xz["em"] + '<span><br></div>'


							,
						confirmButtonText: "Yes, Enroll!",
						showCancelButton: true,
						footer: '<a href="tel:0787134053">Want more info?</a>'
					}).then((result) => {
						if (result.isConfirmed) {
							freestenr(result, xz, password)
						}
					})
				} else {
					Swal.fire({
						title: "Verify the student",
						icon: "info",
						html: '<span style="font-size:30px" class="text-primary fw-bold">' + xz["fn"] + " " + xz["ln"] + ' </span><br><br>' +
							'<div style="text-align:left"><span class="text-primary fw-bold">Phone Number: </span>' +
							'<span >' + xz["pn"] + '<span><br>' +
							'<span class="text-primary fw-bold">Study Year: </span>' +
							'<span >' + xz["yr"] + '<span><br>' +
							'<span class="text-primary fw-bold">WhatsApp Number: </span>' +
							'<span >' + xz["wa"] + '<span><br>' +
							'<span class="text-primary fw-bold">Address: </span>' +
							'<span >' + xz["ad"] + '<span><br>' +
							'<span class="text-primary fw-bold">Birthday: </span>' +
							'<span >' + xz["bd"] + '<span><br>' +
							'<span class="text-primary fw-bold">Email: </span>' +
							'<span >' + xz["em"] + '<span><br></div>'


							,
						confirmButtonText: "Yes, Enroll!",
						showCancelButton: true,
						footer: '<a href="tel:0787134053">Want more info?</a>'
					}).then((result) => {


						if (result.isConfirmed) {
							freestenr(result, xz, password)
						}
					})
				}

			} else {
				Swal.fire(
					'Invalid ID',
					'Please re-check the id & submit again',
					'error'
				)
			}

		}

		path = "students/" + password + "/"
		const dbRefObjectas = firebase.database().ref().child(path);

		// Sync object changes
		dbRefObjectas.once('value', snap => vi(snap.val()));
	}
}