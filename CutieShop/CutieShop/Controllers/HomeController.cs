using CutieShop.Models.JSONEntities.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Diagnostics;
using System.Dynamic;

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
            responseData.SessionId = null;
            responseData.User = null;

            //If user has logged in
            if (false)
            {
                responseData.User = new ExpandoObject();
                responseData.User.Name = "Nguyễn Văn A";
                responseData.User.Point = 25;
            }

            return View(responseData);
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
