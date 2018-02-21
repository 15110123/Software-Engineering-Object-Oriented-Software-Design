using System.Threading.Tasks;
using CutieShop.API.DB.Models.DAO;
using Microsoft.AspNetCore.Mvc;

namespace CutieShop.API.DB.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        // GET
        [HttpPost]
        public async Task<IActionResult> Index(string username, string password)
        {
            using (var authDAO = new AuthDAO())
            {
                var result = await authDAO.Read(username, password);
                if (result == null) return Json(null);
                if (result.Employee != null)
                {
                    return Json(new
                    {
                        name = result.Name,
                        profileImg = result.ProfileImg,
                        customer = (object)null,
                        employee = new
                        {
                            address = result.Employee.Address,
                            dateOfBirth = result.Employee.DateOfBirth,
                            homeTown = result.Employee.HomeTown,
                            phoneNumber = result.Employee.PhoneNumber,
                            email = result.Employee.Email,
                            type = result.Employee.Type,
                            store = result.Employee.Store
                        }
                    });
                }
                return Json(new
                {
                    name = result.Name,
                    profileImg = result.ProfileImg,
                    customer = new
                    {
                        address = result.Customer.Address,
                        phoneNumber = result.Customer.PhoneNumber,
                        email = result.Customer.Email,
                        score = result.Customer.Score.Value
                    },
                    employee = (object)null
                });
            }
        }
    }
}