angular.module('cv').directive('projectList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/projectList/projectList.html',
        link: function (scope, element, attrs, fn) {

            scope.projects = [
                {
                    name: 'Parking Space Finder',
                    company: 'University of Glasgow',
                    description: 'An app that allows the user to select a nearby car park and view a map of all available ' +
                    'parking spaces. A sonar based distance sensor was placed in each parking space and connected to an Arduino' +
                    ' board. scope determined whether a car was parked in the space and updated the user\'s car park map ' +
                    'appropriately. ',
                    startDate: 'October 2015',
                    endDate: 'December 2015',
                    link: 'https://www.youtube.com/embed/j0bbQysxf7Q',
                    imageURL: 'img/projects/parkingSpaceFinder.png',
                    teamSize: 2,
                    topFive: true,
                    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'jQuery Mobile']
                },
                {
                    name: 'CORE Conference Website',
                    company: 'ASRANet Ltd',
                    description: 'CORE Conference Website',
                    startDate: '',
                    endDate: '',
                    link: 'https://www.offshore-renewables.co.uk/',
                    imageURL: 'img/projects/CORE.jpg',
                    teamSize: 1,
                    topFive: true,
                    tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
                },
                {
                    name: 'BioMaAp Conference Website',
                    company: 'ASRANet Ltd',
                    description: 'BioMaAp Conference Website',
                    startDate: '',
                    endDate: '',
                    link: 'https://www.bio-materials.co.uk/',
                    imageURL: 'img/projects/biomat.png',
                    teamSize: 1,
                    topFive: false,
                    tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
                },
                {
                    name: 'Excurj Travel Website',
                    company: 'University of Glasgow',
                    description: 'Myscope and three team members created a travel website for a university project. Users can ' +
                    'visit the website to find people who live in the cities they are visiting. scope way they can be shown ' +
                    'around the city by people who really know it.',
                    startDate: 'February 2016',
                    endDate: 'April 2016',
                    link: 'http://excurj.pythonanywhere.com/',
                    imageURL: 'img/projects/excurj.png',
                    teamSize: 4,
                    topFive: false,
                    tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
                },
                {
                    name: 'NUPP Conference Website',
                    company: 'ASRANet Ltd',
                    description: 'NUPP Conference Website',
                    startDate: 'January 2016',
                    endDate: 'February 2016',
                    link: 'https://nupp.nuclearpowerplantconference.com/',
                    imageURL: 'img/projects/NUPP.jpg',
                    teamSize: 1,
                    topFive: false,
                    tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
                },
                {
                    name: 'Turnip Wars Game',
                    company: 'University West of Scotland',
                    description: 'Turnip Wars is a web based game created with the Phaser framework. Two players play against ' +
                    'one another via an online connection. The game itscope is a twist on the classic tower defence formula. ' +
                    'During the game each player can spawn Turnip Warriors who will run towards the enemy\'s base in an attempt' +
                    ' to destroy it. The other player can then spawn guns which will attempt to automatically shoot the invading ' +
                    'turnips. Each Turnip Warrior which reaches the enemy\'s base will cause a small amount of damage and will ' +
                    'earn the invading player credits which can be spent on more Turnip Warriors and guns. The player who has ' +
                    'their base destroyed first is the loser.',
                    startDate: 'September 2014',
                    endDate: 'December 2014',
                    link: 'https://www.youtube.com/embed/rTdJZn8rM5o',
                    imageURL: 'img/projects/turnipWars.png',
                    teamSize: 2,
                    topFive: true,
                    tags: ['Phaser', 'HTML', 'Web Games', 'JavaScript', 'Google App Engine']
                },
                {
                    name: 'CONFAB Conference Website',
                    company: 'ASRANet Ltd',
                    description: 'CONFAB Conference Website',
                    startDate: '',
                    endDate: '',
                    link: 'https://www.fireandblast.co.uk/',
                    imageURL: 'img/projects/confab.jpg',
                    teamSize: 1,
                    topFive: false,
                    tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
                },
                {
                    name: 'Pressure Input Project',
                    company: 'University of Glasgow',
                    description: 'A novel input method involving the use of pressure pads was developed to attempt to increase ' +
                    'the mobile typing speed of the average user. scope input method works in conjunction with a standard mobile ' +
                    'keyboard. The user will switch between keyboard views (lowercase, uppercase and numbers/symbols) by ' +
                    'applying a small amount of pressure to the side of the phone. Tests show that scope method is a viable ' +
                    'alternative to the standard input method for controlling keyboard views as performance between the two ' +
                    'input methods is relatively similar.',
                    startDate: 'October 2015',
                    endDate: 'December 2015',
                    link: 'https://www.youtube.com/embed/aA_zj2pinus',
                    imageURL: 'img/projects/pressureProject.png',
                    teamSize: 4,
                    topFive: true,
                    tags: ['Android', 'Java', 'Hardware', 'HCI', 'Research', 'Mobile Development']
                },
                {
                    name: 'DISS Conference Website',
                    company: 'ASRANet Ltd',
                    description: 'DISS Conference Website',
                    startDate: '',
                    endDate: '',
                    link: 'https://www.ship-dismantling.co.uk/',
                    imageURL: 'img/projects/DISS.png',
                    teamSize: 1,
                    topFive: false,
                    tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
                },
                {
                    name: 'AdWind Conference Website',
                    company: 'ASRANet Ltd',
                    description: 'AdWind Conference Website',
                    startDate: '',
                    endDate: '',
                    link: 'https://www.adwind2017.com/',
                    imageURL: 'img/projects/adwind.jpg',
                    teamSize: 1,
                    topFive: false,
                    tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
                },
                {
                    name: 'Masters Project',
                    company: 'University of Glasgow',
                    description: 'Masters Project',
                    startDate: 'June 2016',
                    endDate: 'September 2016',
                    link: '',
                    imageURL: 'img/projects/mastersProject.png',
                    teamSize: 1,
                    topFive: true,
                    tags: ['Python', 'Numpy', 'Scipy', 'Data Science', 'Research', 'Multimedia']
                },
                {
                    name: 'Portfolio Website',
                    company: 'Personal Project',
                    description: 'Portfolio Website',
                    startDate: 'October 2016',
                    endDate: '',
                    link: '',
                    imageURL: 'img/projects/portfolio.png',
                    teamSize: 1,
                    topFive: false,
                    tags: ['Angular', 'HTML', 'JavaScript', 'Bootstrap', 'CSS', 'chartJS']
                },
                {
                    name: 'Honours Project',
                    company: 'University West of Scotland',
                    description: 'A simple web-based game editor that allows users to create sprites and use them in a game. ' +
                    'Sprites can be manipulated, for example moved towards the mouse at a fixed speed, upon completion of specified ' +
                    'events e.g. a mouse move event. The game editor includes a physics engine and so collisions between sprites ' +
                    'are possible.',
                    startDate: '',
                    endDate: '',
                    link: '',
                    imageURL: 'img/projects/uws.png',
                    teamSize: 1,
                    topFive: false,
                    tags: ['Game Development', 'HTML', 'JavaScript', 'jQuery', 'jQuery Mobile', 'Multimedia']
                }
            ];


            scope.hideOverlay = function (e) {

                if (e.target.id === "overlay" || e.target.id === "overlayCross") {
                    console.log(e.target.id);

                    scope.overlayShow = false;
                    scope.overlayProject = {};

                }
            };

            scope.showOverlay = function (project) {
                scope.overlayShow = true;
                scope.overlayProject = project;
            };

            scope.getNumber = function (num) {
                return new Array(num);
            };

        }
    };
});
