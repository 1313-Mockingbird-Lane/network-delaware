'use strict'
var campaignTitle;
var purpose;
var ownerFirstName;
var ownerLastName;
var campaignEmail;
var organizationName;
var address1;
var campaignZipcode;


var volunteerFirstName;
var volunteerLastName;
var volunteerEmail;
var volunteerZipcode;
function pullCampaignInfo(){
    campaignTitle = document.getElementById("title");
    purpose = document.getElementById("purpose");
    ownerFirstName = document.getElementById("ownerFirstName");
    ownerLastName = document.getElementById("ownerLastName");
    campaignEmail = document.getElementById("organizationName");
    address1 = document.getElementById("address1");
    campaignZipcode = document.getElementById("campaignZipcode");

}

function pullVolunteerInfo(){
    volunteerFirstName = document.getElementById("firstName");
    volunteerLastName = document.getElementById("lastName");
    volunteerEmail = document.getElementById("volunteerEmail");
    volunteerZipcode = document.getElementById("volunteerZipcode");
}

