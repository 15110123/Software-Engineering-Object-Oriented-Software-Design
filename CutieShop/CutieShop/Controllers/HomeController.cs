using CutieShop.Models.JSONEntities.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Diagnostics;
using System.Dynamic;
using System.Threading.Tasks;

namespace CutieShop.Controllers
{
    public class HomeController : Controller
    {
        private readonly APISettings _apiSettings;

        public HomeController(IOptions<APISettings> apiSettings)
        {
            _apiSettings = apiSettings.Value;
        }

        public async Task<IActionResult> Index()
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
                responseData.User.ProfileUrl =
                    "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg";
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
