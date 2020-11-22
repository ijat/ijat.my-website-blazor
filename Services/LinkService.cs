using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;

namespace Ijatmy_website.Services
{
    public class LinkService
    {
        private readonly ILogger _logger;
        private Dictionary<string, string> _link_mapper = new Dictionary<string, string>();
        private Dictionary<string, string> _guid_mapper = new Dictionary<string, string>();
        private Dictionary<string, string> _links = new Dictionary<string, string>
        {
            {"github", "https://github.com/ijat"},
            {"linkedin", "https://www.linkedin.com/in/syafiqizzat"},
            {"twitter", "https://twitter.com/msyafiqIzzat"},
            {"facebook","https://www.facebook.com/ijat325"},
            {"instagram", "https://www.instagram.com/ijatrf/"},
            {"steam","https://steamcommunity.com/id/solRenegade/"},
            {"youtube", "https://www.youtube.com/channel/UCA4vGByyx3T2Ou3KCBNi06Q"},
            {"lastfm","https://www.last.fm/user/ijat325"},
            {"pgp","https://pgp.circl.lu/pks/lookup?op=vindex&fingerprint=on&search=0x2516AC47291E9485"},
            {"pgp-current","https://pgp.circl.lu/pks/lookup?op=vindex&fingerprint=on&search=0x0635171D97C03BBB"}
        };
        
        public LinkService(ILogger<LinkService> logger)
        {
            _logger = logger;
        }

        public string GetLink(string guid)
        {
            return !_guid_mapper.ContainsKey(guid) ? string.Empty : _guid_mapper[guid];
        }

        public string GetGuid(string link)
        {
            if (!this._link_mapper.ContainsKey(link))
            {
                _link_mapper[link] = Guid.NewGuid().ToString();
                _guid_mapper[_link_mapper[link]] = _links[link];
            }
            return "/g/" + this._link_mapper[link];
        }
    }
}