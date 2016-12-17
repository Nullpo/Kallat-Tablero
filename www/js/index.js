/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        $(function () {
                console.log("Botones: ", $(".number-spinner button"));

                $(".savePdV").click(function () {
                    var max = parseInt($(".newPdV").val());
                    var oldMax = parseInt($(".PdV").attr("max"));
                    var val = parseInt($(".PdV").val());

                    var newVar = val + (max - oldMax);

                    $(".PdV").attr('max', max);
                    $(".PdV").val(newVar);
                    $(".PdVLabel").text(newVar);

                    if(parseInt($(".PdV").val()) < max) $("[maxPdV]").removeAttr("disabled");
                });

                $(".savePdE").click(function () {
                    var max = parseInt($(".newPdE").val());
                    var oldMax = parseInt($(".PdE").attr("max"));
                    var val = parseInt($(".PdE").val());

                    var newVar = val + (max - oldMax);

                    $(".PdE").attr('max', max);
                    $(".PdE").val(newVar);
                    $(".PdELabel").text(newVar);


                    if(parseInt($(".PdE").val()) < max) $("[maxPdE]").removeAttr("disabled");
                });

                $(".number-spinner button").click(function () {
                    console.log("Hizo click!");
                    var btn = $(this);
                    var input = btn.closest('.number-spinner').find('input');
                    var p = btn.closest('.number-spinner').find('p');

                    btn.closest('.number-spinner').find('button').prop("disabled", false);

                    if (btn.attr('data-dir') == 'up') {
                        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                            input.val(parseInt(input.val()) + 1);
                            p.text(input.val());
                        }

                        if (input.attr('max') <= parseInt(input.val())) {
                            btn.prop("disabled", true);
                        }
                    } else {
                        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                            input.val(parseInt(input.val()) - 1);
                            p.text(input.val());
                        }

                        if (input.attr('min') >= parseInt(input.val())) {
                            btn.prop("disabled", true);
                        }
                    }
                });
            }
        );
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        /*var parentElement = document.getElementById(id);
         var listeningElement = parentElement.querySelector('.listening');
         var receivedElement = parentElement.querySelector('.received');

         listeningElement.setAttribute('style', 'display:none;');
         receivedElement.setAttribute('style', 'display:block;');
         */
        console.log('Received Event: ' + id);
    }
};
