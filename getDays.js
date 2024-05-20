function getDays(date1, date2) {
    const d = date1.getTime() - date2.getTime();
    const daysDifference = d / (1000 * 60 * 60 * 24);

    console.log(daysDifference);
    
}
getDays( new Date("June 14, 2024") , new Date("January 1, 2024"))
getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
getDays(new Date("July 20, 2019"), new Date("July 30, 2019"))