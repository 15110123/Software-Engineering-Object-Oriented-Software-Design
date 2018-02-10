namespace CutieShop.API.Models.JSONEntities.Settings
{
    public class AzureSettings
    {
        public Vision Vision { get; set; }
    }

    public class Vision
    {
        public string Endpoint { get; set; }
        public string Key1 { get; set; }
        public string Key2 { get; set; }
    }
}
