let mileage = 10000;
function scheduleMaintenance () {
    const maintenanceInterval = 5000;
    if (mileage >= maintenanceInterval) {
        alert();
        mileage = 0;
        updateMileage();
    } else {
        alert('Ainda não é hora da revisão, continue dirigindo!');
    }
}

function updateMileage() {
    const mileageElement = document.getElementById('mileage');
    mileage += 1000;
    mileageElement.textContent = mileage;
}

setInterval(updateMileage, 3000);