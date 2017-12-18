(function() {
    'use strict';

    angular
        .module('app')
        .factory('restService', restService);
    
    restService.$inject = ['$http', '$q'];

    function restService($http, $q) {
        var baseUrl = _spPageContextInfo.webAbsoluteUrl;
        var digest = $("#__REQUESTDIGEST").val();

        var service = {
            generatePayload: generatePayload,
            updateListItem: updateListItem,
            deleteListItem: deleteListItem,
            getFieldOptions: getFieldOptions,
            getListView: getListView,
            getListItem: getListItem,
            getColumnsByListView: getColumnsByListView,
            getListFields: getListFields,
            getList: getList
        };

        return service;

        function generatePayload(listItem) {
          // Build payload for rest patch request
          var payload = {}; 
          for (var key in listItem) {
            if (key !== '__metadata' && key !== '$$hashKey' && key !== 'Id' && key !== 'ID') {
              if (typeof listItem[key] === 'object' && listItem[key] !== null) {
                var lookupFieldIdKey = key + 'Id';
                payload[lookupFieldIdKey] = listItem[key].ID;
              } else {
                payload[key] = listItem[key];
              }
            } 
          }

          // Merge listType with payload as required by sharepoint rest api
          payload.__metadata = { type: listItem.__metadata.type };
          return payload;
        }

        function updateListItem(listItem, listTitle) {
          return(
            $http({
              url: baseUrl + "/_api/web/lists/GetByTitle('" + listTitle + "')/Items(" + listItem.ID + ")",
              method: "PATCH",
              data: this.generatePayload(listItem),
              headers: {
                "X-HTTP-Method": "MERGE",
                "accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose",
                "If-Match": "*",
                "X-RequestDigest": digest
              }
            }).then(function(response) {
              // Handle success
            }, function(error) {
              // Error handling
            })
          );
        }

        function deleteListItem(listItem, listTitle) {
          return(
            $http({
              url: baseUrl + "/_api/web/lists/GetByTitle('" + listTitle + "')/Items(" + listItem.ID + ")",
              method: "POST",
              headers: {
                "X-HTTP-Method": "DELETE"
              }
            }).then(function(response) {
              return response;
            }, function(error) {
              // Error handling
            })
          );
        }

        function getFieldOptions(guid) {
          var deferred = $q.defer();
          $http({
            method: "GET",
            url: baseUrl + "/_api/web/Lists(guid'" + guid + "')/Items?$select=Title,ID",
            headers: {
              "accept":"application/json; odata=verbose"
            }
          }).then(function(response) {
            deferred.resolve(response.data.d.results);
          }, function(error) {
            deferred.reject(error);
          });
          return deferred.promise;
        }

        function getListView(listTitle, displayViewTitle) {
          return(
            $http({
              method: "GET",
              url: baseUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/Views/getbytitle('" + displayViewTitle + "')",
              headers: {
                "accept":"application/json; odata=verbose"
              }
            }).then(function(response) {
              return response;
            })
          );
        }

        function getListItem(listItem, listTitle, selectQuery, expandQuery) {
          return(
            $http({
              method: "GET",
              url: baseUrl + "/_api/web/lists/GetByTitle('" + listTitle + "')/Items(" + listItem.ID + ")?$select=" + selectQuery + "&$expand=" + expandQuery + "",
              headers: {
                "accept":"application/json; odata=verbose"
              }
            }).then(function(response) {
              return response;
            })
          );
        }

        function getList(listTitle, selectQuery, expandQuery) {
          return(
            $http({
              method: "GET",
              url: baseUrl + "/_api/web/lists/GetByTitle('" + listTitle + "')/Items?$select=" + selectQuery + "&$expand=" + expandQuery + "",
              headers: {
                "accept":"application/json; odata=verbose"
              }
            }).then(function(response) {
              return response;
            })
          );
        }

        function getColumnsByListView(listTitle, viewTitle) {
          return(
            $http({
              method: "GET",
              url: baseUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/Views/getbytitle('" + viewTitle + "')/ViewFields",
              headers: {
                "accept":"application/json; odata=verbose"
              }
            }).then(function(response) {
              return response;
            })
          );
        }

        function getListFields(listTitle) {
          return(
            $http({
              method: "GET",
              url: baseUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/fields",
              headers: {
                "accept":"application/json; odata=verbose"
              }
            }).then(function(response) {
              return response;
            })
          );
        }
    }
})();