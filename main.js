const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Team", "Presale", "Liquidity", "Marketing", "Staking", "Airdrop", "Private" ],
        datasets: [{
            label: "# of Votes",
            data: [6, 30, 15, 3, 40, 1, 5],
            backgroundColor: ["#5D7BD9", "#9FE080", "#FFDC60", "#FF7070", "#72C0DE", "#41B27D", "#FF915A", "#A969C6", "#e85fe1", ],
            borderColor: "#262F3D",
            borderWidth: 3,
            hoverOffset: 5,
            offset: -10,
            spacing: 5,
            borderRadius: 10,
        }, ],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    },
});
Chart.defaults.font.size = 16;

function showBubble1() {
    $("#bubble1").toggle();
}