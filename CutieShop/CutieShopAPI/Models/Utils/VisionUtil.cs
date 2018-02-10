using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using CutieShop.API.Models.JSONEntities.Settings;
using CutieShop.API.Models.JSONEntities.Vision;
using Newtonsoft.Json;

namespace CutieShop.API.Models.Utils
{
    public sealed class VisionUtil
    {
        private readonly AzureSettings _azureSettings;
        public VisionUtil(AzureSettings azureSettings)
        {
            _azureSettings = azureSettings;
        }

        public async Task<VisionResult> GetResult(string imageUrl)
        {
            var client = new HttpClient();

            // Request headers.
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", _azureSettings.Vision.Key1);

            // Request parameters. A third optional parameter is "details".
            var requestParameters = "visualFeatures=Categories,Description,Color&language=en";

            // Assemble the URI for the REST API Call.
            var uri = _azureSettings.Vision.Endpoint + "?" + requestParameters;

            HttpResponseMessage response;

            // Request body. Posts a locally stored JPEG image.
            var byteData = (await HttpUtil.GetBytesFromUrl(imageUrl)).ToArray();

            using (var content = new ByteArrayContent(byteData))
            {
                // This example uses content type "application/octet-stream".
                // The other content types you can use are "application/json" and "multipart/form-data".
                content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

                // Execute the REST API call.
                response = await client.PostAsync(uri, content);

                // Get the JSON response.
                var contentString = await response.Content.ReadAsStringAsync();

                // Display the JSON response.

                return JsonConvert.DeserializeObject<VisionResult>(contentString);
            }
        }
    }
}
