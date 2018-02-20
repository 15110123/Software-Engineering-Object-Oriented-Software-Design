using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Dynamic;
using CutieShop.Models.JSONEntities.Settings;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;

namespace CutieShop.Controllers
{
    public class HomeController : Controller
    {
        private readonly APISettings _apiSettings;

        public HomeController(IOptions<APISettings> apiSettings)
        {
            _apiSettings = apiSettings.Value;
        }

        public IActionResult Index()
        {
            dynamic responseData = new ExpandoObject();
            responseData.MainAPI = _apiSettings.Url.MainUrl;
            responseData.DbAPI = _apiSettings.Url.DbUrl;
            responseData.SessionId = "";
            return View(responseData);
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
