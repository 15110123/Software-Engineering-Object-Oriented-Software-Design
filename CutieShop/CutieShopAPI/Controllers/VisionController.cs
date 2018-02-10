using System.Collections.Generic;
using System.Threading.Tasks;
using CutieShop.API.Models.JSONEntities.Settings;
using CutieShop.API.Models.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace CutieShop.API.Controllers
{
    [Route("api/[controller]")]
    public sealed class VisionController : Controller
    {
        private readonly AzureSettings _azureSettings;

        public VisionController(IOptions<AzureSettings> azureSettings)
        {
            _azureSettings = azureSettings.Value;
        }

        [HttpGet("{*imageUrl}")]
        public async Task<IEnumerable<string>> Index(string imageUrl)
        {
            //Small issue: Don't really know why all continueous slashes are grouped in one 
            imageUrl = imageUrl.Replace(@":/", @"://");
            var visionUtil = new VisionUtil(_azureSettings);
            return new [] { "vision1", "vision2", imageUrl, (await visionUtil.GetResult(imageUrl)).Description.Captions[0].Text };
        }
    }
}