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

var campaign = new Object();
var volunteer = new Object();

function pullCampaignInfo(){
    campaign.campaignTitle = document.getElementById("title");
    campaign.purpose = document.getElementById("purpose");
    campaign.ownerFirstName = document.getElementById("ownerFirstName");
    campaign.ownerLastName = document.getElementById("ownerLastName");
    campaign.campaignEmail = document.getElementById("organizationName");
    campaign.address1 = document.getElementById("address1");
    campaign.campaignZipcode = document.getElementById("campaignZipcode");
    
    console.log(String(campaign.campaignTitle));

}

function pullVolunteerInfo(){
    volunteer.volunteerFirstName = document.getElementById("firstName");
    volunteer.volunteerLastName = document.getElementById("lastName");
    volunteer.volunteerEmail = document.getElementById("volunteerEmail");
    volunteer.volunteerZipcode = document.getElementById("volunteerZipcode");
}

    


