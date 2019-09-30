using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SomeDataController
    {
     
            private static readonly string[] Summaries = new[]
            {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };

            private readonly ILogger<SomeDataController> _logger;

            public SomeDataController(ILogger<SomeDataController> logger)
            {
                _logger = logger;
            }

            [HttpGet]
            public IEnumerable<SomeDataModel> Get()
            {
                return Enumerable.Range(1, 1).Select(index => new SomeDataModel
                {
                    Date = DateTime.Now,
                    Name = "Jorge",
                    Age = 21
                }).ToArray();
            }
        
    }
}
