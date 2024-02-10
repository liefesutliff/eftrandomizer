// Initializing WeaponList Arrays
var primaryWeaponList = ['AK-12', 'AK-101', 'AK-102', 'AK-103', 'AK-104', 'AK-105', 'AK-74', 'AK-74M', 'AK-74N', 'AKM', 'AKMN', 'AKMS', 'AKMSN', 'AKS-74', 'AKS-74N', 'AKS-74U', 'AKS-74UB', 'AKS-74UN', 'AS VAL', 'ASh-12', 'AUG A1', 'AUG A3', 'DT MDR 5.56x45', 'DT MDR 7.62x51', 'HK 416A5', 'HK G36', 'M4A1', 'MCX', 'MCX SPEAR', 'Mk47', 'RD-704', 'SA-58', 'SCAR-H', 'SCAR-L', '9A-91', 'ADAR 2-15', 'AVT-40', 'OP-SKS', 'RFB', 'SAG AK', 'SAG AK Short', 'SKS', 'SVT-40', 'TX-15 DML', 'VPO-101', 'VPO-136', 'VPO-209', 'VSK-94', 'PKM', 'PKP', 'RPD', 'RPDN', 'RPK-16', 'MP5', 'MP5K-N', 'MP7A1', 'MP7A2', 'MP9', 'MP9-N', 'MPX', 'P90', 'PP-19-01 Vityaz-SN', 'PP-9 Klin', 'PP-91 Kedr', 'PP-91-01 Kedr-B', 'PPSh-41', 'Saiga-9', 'SR-2M', 'STM-9', 'UMP 45', 'Vector 45', 'Vector 9x19', 'KS-23M', 'M3 Super 90', 'M590A1', 'M870', 'MP-18', 'MP-133', 'MP-153', 'MP-155', 'MP-43-1C', 'MTs-255-12', 'Saiga-12', 'TOZ-106', 'HK G28', 'M1A', 'Mk-18', 'RSASS', 'SR-25', 'SVDS', 'VSS Vintorez', 'AXMC', 'DVL-10', 'M700', 'Mosin Infantry', 'Mosin Sniper', 'SV-98', 'T-5000', 'VPO-215', 'FN40GL', 'M32A1', 'No Primary Weapon For You'];
var secondaryWeaponList = ['APB', 'APS', 'FN 5-7', 'Glock 17', 'Glock 18C', 'Glock 19X', 'M1911A1', 'M45A1', 'M9A3', 'MP-443 Grach', 'P226R', 'PB', 'PL-15', 'PM t', 'PM', 'SR-1MP Gyurza', 'TT', 'TT Gold', 'USP 45', 'CR 200DS', 'CR 50DS', 'RSh-12', 'MP-43 sawed-off', 'No Secondary Weapon For You'];

// TODO: Setup initialization only when this weapon is chosen

function generatePrimaryWeapon() {

  // Here we initialize primaryWeapon
  var primaryWeapon = "";
  primaryWeapon = primaryWeaponList[Math.floor(Math.random() * primaryWeaponList.length)];
  document.getElementsByClassName("item1")[0].innerHTML = primaryWeapon;
  if (primaryWeapon !== 'No Primary Weapon For You') {
    document.querySelector('.primaryWeaponImage').src = "images/primaryWeapons/" + primaryWeapon + ".webp";
  } else {
    document.querySelector('.primaryWeaponImage').src = "";
  }


}

function generateSecondaryWeapon() {

  // Here we initialize secondaryWeapon
  var secondaryWeapon = "";
  secondaryWeapon = secondaryWeaponList[Math.floor(Math.random() * secondaryWeaponList.length)];
  document.getElementsByClassName('item2')[0].innerHTML = secondaryWeapon;
  if (secondaryWeapon !== 'No Secondary Weapon For You') {
    document.querySelector('.secondaryWeaponImage').src = "images/secondaryWeapons/" + secondaryWeapon + ".webp";
  } else {
    document.querySelector('.secondaryWeaponImage').src = "";
  }

}