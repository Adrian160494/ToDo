app.service('data',function () {
    this.getTasks = function ($http,baseUrl) {
        return $http({
            method: "GET",
            url: baseUrl
        });
    };
    this.delete = function ($http, baseUrl, id) {
        return $http({
            method: "DELETE",
            url: baseUrl+"/" + id
        });
    };

    this.add = function ($http, baseUrl, data) {
        return $http.post(baseUrl,data);
    };

    this.update = function ($http, baseUrl, id, data) {
        return $http({
            method: "POST",
            url: baseUrl +"/" + id,
            data: data
        });
    };
});
