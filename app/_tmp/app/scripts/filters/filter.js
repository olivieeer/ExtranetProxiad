/**
 * Created by Olive on 28/08/2015.
 */

angular.module('firstAppApp').filter('date', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }
        alert("filter");
        var _date = $filter('date')(new Date(input), 'MMM dd yyyy');

        return _date.toUpperCase();

    };
});