using CutieShop.Models.JSONEntities.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace CutieShop.Controllers.Api
{
    [Route("[controller]")]
    public class ApiController : Controller
    {
        private readonly APISettings _apiSettings;
        public ApiController(IOptions<APISettings> apiSettings)
        {
            _apiSettings = apiSettings.Value;
        }
    }
}
