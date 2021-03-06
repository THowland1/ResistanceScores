﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResistanceScores.Models;
using ResistanceScores.Models.api;
using ResistanceScores.Services;

namespace ResistanceScores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GraphController : ControllerBase
    {
        private IGraphService _graphService;

        public GraphController(IGraphService graphService)
        {
            _graphService = graphService ?? throw new ArgumentNullException(nameof(graphService));
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<GraphPlayerDto>), StatusCodes.Status200OK)]
        public async Task<ActionResult<List<GraphPlayerDto>>> Get([FromQuery] QueryOptions queryOptions)
        {
            var graph = await _graphService.GetGraph(queryOptions);
            return Ok(graph);
        }
    }
}
