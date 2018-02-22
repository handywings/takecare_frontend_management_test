var CalendarBasic = function() {

    return {
        //main function to initiate the module
        init: function() {
            var todayDate = moment().startOf('day');
            var YM = todayDate.format('YYYY-MM');
            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
            var TODAY = todayDate.format('YYYY-MM-DD');
            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
            $('#m_calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listWeek'
                },
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                navLinks: true,
                businessHours: true, // display business hours
                events: [
                    {
                        title: 'วันขึ้นปีใหม่',
                        start: '2018-01-01',
                        description: 'วันขึ้นปีใหม่',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันหยุดชดเชยวันปีใหม่',
                        start: '2018-01-02',
                        description: 'วันหยุดชดเชยวันปีใหม่',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันตรุษจีน',
                        start: '2018-02-16',
                        description: 'วันตรุษจีน',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันมาฆบูชา',
                        start: '2018-03-01',
                        description: 'วันมาฆบูชา',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันจักรี',
                        start: '2018-06-04',
                        description: 'วันจักรี',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันสงกรานต์',
                        start: '2018-04-13',
                        description: 'วันสงกรานต์',
                        end: '2018-04-16',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันแรงงาน',
                        start: '2018-05-01',
                        description: 'วันแรงงาน',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันพืชมงคล',
                        start: '2018-05-14',
                        description: 'วันพืชมงคล',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันวิสาขบูชา',
                        start: '2018-05-29',
                        description: 'วันวิสาขบูชา',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันอาสาฬหบูชา',
                        start: '2018-07-27',
                        description: 'วันอาสาฬหบูชา',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันเข้าพรรษา',
                        start: '2018-07-28',
                        description: 'วันเข้าพรรษา',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันเกิดของพระบาทสมเด็จพระเจ้าอยู่หัว',
                        start: '2018-07-28',
                        description: 'วันเกิดของพระบาทสมเด็จพระเจ้าอยู่หัว',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'วันหยุดชดเชยวันเกิดของพระบาทสมเด็จพระเจ้าอยู่หัว',
                        start: '2018-08-30',
                        description: 'วันหยุดชดเชยวันเกิดของพระบาทสมเด็จพระเจ้าอยู่หัว',
                        className: "m-fc-event--accent"
                    },
                    
                ],

                eventClick: function(calEvent, jsEvent, view) {

                    $('#activity_detail_modal').modal();
            
            
                },

                eventRender: function(event, element) {
                    if (element.hasClass('fc-day-grid-event')) {
                        element.data('content', event.description);
                        element.data('placement', 'top');
                        mApp.initPopover(element); 
                    } else if (element.hasClass('fc-time-grid-event')) {
                        element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    } else if (element.find('.fc-list-item-title').lenght !== 0) {
                        element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    }
                }
            });
        }
    };
}();

jQuery(document).ready(function() {
    CalendarBasic.init();
});